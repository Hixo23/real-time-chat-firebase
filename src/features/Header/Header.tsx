import { ElementRef, useRef, useState } from "react";
import { useAuth } from "../../services/firebase/firebase";

export const Header = () => {
  return (
    <header className="flex justify-between  px-12 w-screen h-16  items-center mb-4 bg-secondary">
      <h1>Chat</h1>
      <Profile />
    </header>
  );
};

const Profile = () => {
  const { user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const menuRef = useRef<ElementRef<"div">>(null);

  const closeOpenMenus = (e: any) => {
    if (
      menuRef.current &&
      isDropdownOpen &&
      !menuRef.current.contains(e.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  return (
    <div
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      ref={menuRef}
      className="flex items-center gap-4 relative cursor-pointer select-none z-20"
    >
      <img
        className="rounded-full w-12 h-12"
        src={user?.photoURL || ""}
        alt=""
      />
      <p>{user?.displayName}</p>
      {isDropdownOpen && <Dropdown />}
    </div>
  );
};

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
