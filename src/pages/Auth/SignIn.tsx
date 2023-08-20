import { useAuth } from "../../services/firebase/firebase";

export const SignIn = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="flex justify-center items-center bg-secondary w-[36rem] h-[28rem] rounded-xl">
      <button
        onClick={signInWithGoogle}
        className="bg-accent text-text py-2 px-4 rounded-xl flex items-center gap-4 hover:-translate-y-2 transition-transform duration-150 hover:shadow-md hover:shadow-accent"
      >
        <img
          className="w-6 h-6 shadow"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt=""
        />{" "}
        <span>Login with Google</span>
      </button>
    </div>
  );
};
