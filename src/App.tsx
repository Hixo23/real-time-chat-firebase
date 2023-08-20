import { SignIn } from "./pages/Auth/SignIn";
import { Chat } from "./pages/Chat/Chat";
import { useAuth } from "./services/firebase/firebase";

function App() {
  const { isLogged } = useAuth();

  return (
    <main
      className={`w-screen h-screen bg-background flex ${
        !isLogged && "justify-center items-center"
      }`}
    >
      {isLogged ? <Chat /> : <SignIn />}
    </main>
  );
}

export default App;
