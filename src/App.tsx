import { LoadingSpinner } from "./features/Loading/LoadingSpinner";
import { SignIn } from "./pages/Auth/SignIn";
import { Chat } from "./pages/Chat/Chat";
import { useAuth } from "./services/firebase/firebase";

function App() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <LoadingSpinner />;

  return (
    <main
      className={`w-screen h-screen bg-background flex ${
        !user && "justify-center items-center"
      }`}
    >
      {user ? <Chat /> : <SignIn />}
    </main>
  );
}

export default App;
