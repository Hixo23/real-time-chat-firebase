import { useAuth } from "../../services/firebase/firebase";

export const Dropdown = () => {
  const { logOut } = useAuth();
  return (
    <div className="absolute top-16 left-0  rounded-lg w-28 flex flex-col items-center">
      <button
        className="bg-secondary rounded-lg w-full py-2 px-4"
        onClick={logOut}
      >
        Sign out
      </button>
    </div>
  );
};
