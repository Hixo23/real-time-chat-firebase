import {
  GoogleAuthProvider,
  User,
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
  CollectionReference,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./config";
import { initializeApp } from "firebase/app";

export type TMessage = {
  content?: string;
  createdAt?: unknown;
  displayName?: string;
  messageId: number | string;
  photoURL?: string;
  id: string;
};

initializeApp(firebaseConfig);

const auth = getAuth();
export const useAuth = () => {
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((data) => {
      setUser(data);
      setIsLoading(false);
    });

    return unsubscribe;
  });

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  return { user, signInWithGoogle, logOut, isLoading };
};

const firestore = getFirestore();
export const useChat = () => {
  const [messages, setMessages] = useState<TMessage[] | null>(null);

  useEffect(() => {
    const messagesCollection = collection(
      firestore,
      "messages"
    ) as CollectionReference<TMessage>;
    const messagesQuery = query(
      messagesCollection,
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(messagesQuery, (doc) => {
      setMessages(
        doc.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reverse()
      );
    });

    return unsubscribe;
  }, []);

  const { user } = useAuth();

  const addMessage = (content: string) => {
    addDoc(collection(firestore, "messages"), {
      displayName: user?.displayName,
      content,
      photoURL: user?.photoURL,
      createdAt: serverTimestamp(),
      messageId: Math.random(),
    });
  };

  const deleteMessage = (id: string) => {
    deleteDoc(doc(firestore, "messages", id));
  };

  return { addMessage, messages, deleteMessage };
};
