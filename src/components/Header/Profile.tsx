import { useState } from "react";
import { useAuth } from "../../services/firebase/firebase";
import { Dropdown } from "./Dropdown";

export const Profile = () => {
  const { user } = useAuth();
  const [dropdownisOpen, setDropdownIsOpen] = useState<boolean>(false);
  return (
    <div
      onClick={() => setDropdownIsOpen(!dropdownisOpen)}
      className="flex items-center gap-4 relative cursor-pointer select-none"
    >
      <img className="rounded-full w-12 h-12" src={user?.photoURL} alt="" />
      <p>{user?.displayName}</p>
      {dropdownisOpen && <Dropdown />}
    </div>
  );
};
