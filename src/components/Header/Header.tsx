import { Profile } from "./Profile";

export const Header = () => {
  return (
    <header className="flex justify-between  px-12 w-screen h-16  items-center mb-4 bg-secondary">
      <h1>Chat</h1>
      <Profile />
    </header>
  );
};
