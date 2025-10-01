import { useState } from "react";
import { motion } from "framer-motion";

// Character data
const characters = [
    {
        id: "venice",
        name: "Venice Hottie",
        desc: "✨ Hottie on a one-way ticket to Venice Beach",
        emoji: "🏄‍♀️",
    },
    {
        id: "banker",
        name: "Club Banker",
        desc: "💼 Hustle-hard club girl with a corporate AMEX",
        emoji: "💃",
    },
    {
        id: "bali",
        name: "Bali Babe",
        desc: "🌴 Just landed in Bali with no return flight",
        emoji: "🦋",
    },
];

export default function CharacterSelect({ onSelect }) {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center justify-center gap-10 px-6 py-10">
            <h1 className="text-3xl font-extrabold text-purple-700 text-center">
                You ready to play <br /> <span className="underline">snapchatmindgames?</span>
            </h1>

            <div className="flex flex-row flex-wrap justify-center gap-20 mt-8 px-8">
                {characters.map(({ id, name, desc, emoji }) => {
                    const isSelected = selectedId === id;

                    return (
                        <motion.div
                            key={id}
                            onClick={() => {
                                setSelectedId(id);
                                setTimeout(() => onSelect(id), 500); // slight delay before transition
                            }}
                            className={`relative flex flex-col items-center justify-between cursor-pointer select-none
  bg-purple-200 border-4 ${isSelected ? "border-yellow-400 ring-4 ring-yellow-300" : "border-purple-400"
                                } rounded-3xl p-4 w-[240px] h-[340px] shadow-[0_10px_25px_rgba(0,0,0,0.25)]
  hover:shadow-[0_12px_30px_rgba(128,0,128,0.5)]
  transition duration-300 ease-in-out`}
                            style={{
                                background: "linear-gradient(135deg, #f3e8ff, #e9d5ff)",
                            }}

                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="text-8xl mb-4"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            >
                                {emoji}
                            </motion.div>
                            <div className="text-lg font-semibold text-purple-900">{name}</div>
                            <div className="text-sm text-purple-700 text-center mt-1">{desc}</div>

                            {/* Sparkle overlay when selected */}
                            {isSelected && (
                                <div className="absolute top-2 right-2 text-yellow-400 text-xl animate-bounce">
                                    ✨
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
