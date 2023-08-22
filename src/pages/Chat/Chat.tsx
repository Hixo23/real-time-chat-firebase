import { Message } from "../../features/Chat/Message";
import { MessageForm } from "../../features/Chat/MessageForm";
import { Header } from "../../features/Header/Header";
import { useChat } from "../../services/firebase/firebase";
import { Toaster } from "react-hot-toast";

export const Chat = () => {
  const { messages } = useChat();
  return (
    <div className="flex flex-col">
      <Header />
      <Toaster />
      <section className="overflow-y-scroll w-full h-full px-4 py-8">
        {messages?.map((message) => (
          <Message key={message.messageId} {...message} />
        ))}
      </section>
      <MessageForm />
    </div>
  );
};
