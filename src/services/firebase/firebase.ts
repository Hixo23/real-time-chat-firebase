import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import type { IUser } from "../../types/types";
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
