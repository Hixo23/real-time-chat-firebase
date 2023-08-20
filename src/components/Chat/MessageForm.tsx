import { useState } from "react";
import { useChat } from "../../services/firebase/firebase";

export const MessageForm = () => {
  const [messageContent, setMessageContent] = useState<string>("");
  const { addMessage } = useChat();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageContent === "") return;
    addMessage(messageContent);
    setMessageContent("");
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="w-screen flex justify-center h-12 my-2"
    >
      <input
        className="md:w-[95%] w-[70%] p-4 bg-secondary rounded-l-lg md:outline-none"
        placeholder="Type something..."
        type="text"
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
      />
      <button className="bg-accent rounded-r-lg px-4">Send</button>
    </form>
  );
};
