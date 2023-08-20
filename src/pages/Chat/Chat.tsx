import { Message } from "../../components/Chat/Message";
import { MessageForm } from "../../components/Chat/MessageForm";
import { Header } from "../../components/Header/Header";
import { useChat } from "../../services/firebase/firebase";

export const Chat = () => {
  const { messages } = useChat();
  return (
    <div className="flex flex-col">
      <Header />
      <section className="overflow-y-scroll w-full h-full">
        {messages &&
          messages?.map((message) => <Message key={message.id} {...message} />)}
      </section>
      <MessageForm />
    </div>
  );
};
