import { Profile } from "./Profile";

export const Header = () => {
  return (
    <header className="flex justify-between px-12 w-screen h-12 mt-2 items-center mb-4">
      <h1>Chat</h1>
      <Profile />
    </header>
  );
};
