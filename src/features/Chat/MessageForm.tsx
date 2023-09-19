import { useState } from "react";
import { useChat } from "../../services/firebase/firebase";
import toast from "react-hot-toast";

export const MessageForm = () => {
  const [messageContent, setMessageContent] = useState<string>("");
  const { addMessage } = useChat();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const message = messageContent.trim();

    const isEmpty = message.length === 0;

    if (message.length > 50)
      return toast.error(
        "Your message shouldn't be longer than 50 characters",
        {
          style: {
            color: "#fff",
            backgroundColor: "#7072a9",
          },
        },
      );

    if (isEmpty)
      return toast.error("You have to type something!", {
        style: {
          color: "#fff",
          backgroundColor: "#7072a9",
        },
      });

    addMessage(messageContent);
    setMessageContent("");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessageContent(e.target.value);

  return (
    <form
      onSubmit={handleSendMessage}
      className="w-screen flex justify-center h-12 my-2"
    >
      <input
        className=" w-[70%] p-4 bg-secondary rounded-l-lg md:outline-none"
        placeholder="Type something..."
        aria-label="Type something..."
        type="text"
        max={100}
        min={1}
        value={messageContent}
        onChange={handleInput}
      />
      <button className="bg-accent rounded-r-lg px-4">Send</button>
    </form>
  );
};
