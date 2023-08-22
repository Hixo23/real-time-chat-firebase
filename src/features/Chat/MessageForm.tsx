import { useState } from "react";
import { useChat } from "../../services/firebase/firebase";

export const MessageForm = () => {
  const [messageContent, setMessageContent] = useState<string>("");
  const { addMessage } = useChat();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const message = messageContent.trim();

    const isEmpty = message.length === 0;

    if (isEmpty) return;

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
        required
        max={124}
        min={1}
        value={messageContent}
        onChange={handleInput}
      />
      <button className="bg-accent rounded-r-lg px-4">Send</button>
    </form>
  );
};
