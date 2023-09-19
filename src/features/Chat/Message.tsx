import { ElementRef, useEffect, useRef } from "react";
import { TMessage, useAuth } from "../../services/firebase/firebase";

type MessageProps = TMessage;

export const Message = ({ content, displayName, photoURL }: MessageProps) => {
  const { user } = useAuth();

  const messageRef = useRef<ElementRef<"div">>(null);

  const isOwnerMessage = user?.displayName === displayName;

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div
      ref={messageRef}
      className={`my-4 flex justify-start ml-4 ${
        isOwnerMessage && "mr-4 flex-row-reverse"
      } gap-4 z-0`}
    >
      <img
        className="rounded-full w-16 h-16 translate-y-8"
        src={photoURL}
        alt=""
      />
      <div className="flex flex-col gap-2">
        <span className="text-accent">{displayName}</span>

        {content?.startsWith("https:") || content?.startsWith("http:") ? (
          <a
            href={content}
            target="_blank"
            className={`${
              isOwnerMessage ? "bg-blue-600" : "bg-green-600"
            }  py-2 px-3 rounded-xl underline`}
          >
            {content}
          </a>
        ) : (
          <p
            className={`${
              isOwnerMessage ? "bg-blue-600" : "bg-green-600"
            }  py-2 px-3 md:px-4  rounded-xl `}
          >
            {content}
          </p>
        )}
      </div>
    </div>
  );
};
