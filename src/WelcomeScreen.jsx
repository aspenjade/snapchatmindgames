import { useEffect } from "react";

export default function WelcomeScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3000); // 3 seconds loading
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-purple-300 to-pink-300 flex flex-col items-center justify-center text-4xl font-bold text-white tracking-widest select-none">
      <span className="animate-pulse">LOADING...</span>
      <div className="mt-4 text-sm italic">snapchatmindgames</div>
    </div>
  );
}
