import { useAuth } from "../../services/firebase/firebase";

export const SignIn = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="flex justify-between items-center bg-secondary flex-col w-[36rem] h-[28rem] rounded-xl py-6">
        <div className="flex flex-col gap-1 items-center">
            <h1 className="text-3xl font-bold">Hello!</h1>
            <p className="text-gray-400">Sign up below to access the chat!</p>
        </div>
      <div className="flex h-full justify-center items-center">
          <button
              onClick={signInWithGoogle}
              className="bg-accent text-text py-2 px-4 rounded-xl flex items-center gap-4  hover:shadow-md hover:shadow-accent"
          >
              <img
                  className="w-6 h-6 shadow"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
              />{" "}
              <span>Login with Google</span>
          </button>
      </div>
    </div>
  );
};
