import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  orderBy,
  onSnapshot,
  query,
  serverTimestamp,
} from "firebase/firestore";
import type { IMessage, IUser } from "../../types/types";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./config";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

const auth = getAuth();
export const useAuth = () => {
  const [user, setUser] = useState<IUser | null>();

  const isLogged = user !== null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((data: IUser | any) =>
      setUser(data)
    );
    return () => {
      unsubscribe;
    };
  });

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  return { user, isLogged, signInWithGoogle, logOut };
};

export const useChat = () => {
  const firestore = getFirestore();
  const [messages, setMessages] = useState<IMessage[] | null>(null);

  const messagesCollection = collection(firestore, "messages");
  const messagesQuery = query(messagesCollection, orderBy("createdAt", "desc"));

  useEffect(() => {
    const unsubscribe = onSnapshot(messagesQuery, (doc) => {
      const messages: IMessage[] = [];
      doc.docs
        .map((doc) => messages.push({ id: doc.id, ...doc.data() }))
        .reverse();
      setMessages(messages.reverse());
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const { user } = useAuth();

  const addMessage = (content: string) => {
    addDoc(collection(firestore, "messages"), {
      displayName: user?.displayName,
      content,
      photoURL: user?.photoURL,
      createdAt: serverTimestamp(),
      id: Math.random(),
    });
  };

  return { addMessage, messages };
};
