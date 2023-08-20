import { useEffect, useRef } from "react";
import { useAuth } from "../../services/firebase/firebase";
import type { IMessage } from "../../types/types";

export const Message = ({ content, displayName, photoURL }: IMessage) => {
  const { user } = useAuth();

  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div
      ref={messageRef}
      className={`my-4 flex justify-start ml-4 ${
        user?.displayName === displayName && "mr-4 flex-row-reverse"
      } gap-4`}
    >
      <img
        className="rounded-full w-16 h-16 translate-y-8"
        src={photoURL}
        alt=""
      />
      <div className="flex flex-col gap-2">
        <span className="text-accent">{displayName}</span>
        <p
          className={`${
            user?.displayName == displayName ? "bg-blue-600" : "bg-green-600"
          }  py-2 md:px-6 px-3 rounded-xl `}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
