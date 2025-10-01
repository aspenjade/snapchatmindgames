import { useState } from "react";
import { stories } from "./stories";
import { motion, AnimatePresence } from "framer-motion";

export default function Game({ character }) {
  const [scene, setScene] = useState("start");
  const story = stories[character];
  const current = story[scene];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scene}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4 }}
        className="w-[90%] max-w-md bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-xl text-center flex flex-col gap-6 mx-auto mt-20"
      >
        <p className="text-lg font-medium text-gray-800">{current.text}</p>

        <div className="flex flex-col gap-3">
          {current.choices.length > 0 ? (
            current.choices.map((choice, idx) => (
              <button
                key={idx}
                className="bg-purple-400 hover:bg-purple-500 text-white text-sm py-2 px-4 rounded-full shadow active:scale-95 transition"
                onClick={() => setScene(choice.next)}
              >
                {choice.text}
              </button>
            ))
          ) : (
            <div className="text-sm text-gray-600 italic">The end ✨</div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
