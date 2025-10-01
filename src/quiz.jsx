import React, { useState } from "react";

const questions = [
  {
    question: "How quickly do you open a snap from someone you're flirting with?",
    options: [
      { text: "Immediately, I need to see it!", points: 1 },
      { text: "Within an hour, I’m interested but not desperate", points: 2 },
      { text: "I wait at least 5-6 hours", points: 3 },
      { text: "I leave it on delivered for a full day or more", points: 4 },
    ],
  },
  {
    question: "How many times have you ghosted someone?",
    options: [
      { text: "Never, I’m not evil", points: 1 },
      { text: "Once or twice... felt bad", points: 2 },
      { text: "I'm a ghosting regular", points: 3 },
      { text: "I ghost like it's my job", points: 4 },
    ],
  },
  {
    question: "How fast do you catch feelings?",
    options: [
      { text: "Slow burn. I need to really know someone first.", points: 4 },
      { text: "It sneaks up after a few really good convos.", points: 3 },
      { text: "Week two and I'm already planning imaginary vacations.", points: 2 },
      { text: "love at first snapchat.  Like a moth to a flame", points: 1 },
    ],
  },
  {
    question: "When someone sends a dry text, how do you respond?",
    options: [
      { text: "I try to carry the convo anyway", points: 1 },
      { text: "I mirror their energy", points: 2 },
      { text: "I hit them with one word and dip", points: 3 },
      { text: "Leave them on read forever", points: 4 },
    ],
  },
  {
    question: "When someone leaves you on opened, what do you do?",
    options: [
      { text: "OVERTHINK", points: 1 },
      { text: "I let it go", points: 2 },
      { text: "Leave them on opened right back next time", points: 3 },
      { text: "Unadd them instantly", points: 4 },
    ],
  },
  {
    question: "When do you save someone’s name in your phone?",
    options: [
      { text: "As soon as we start talking — I’m organized.", points: 1 },
      { text: "Only if like the conversation", points: 2 },
      { text: "Only after a really really good hangout. Gotta earn that contact name", points: 3 },
      { text: "Never. If I lose the thread, it wasn’t meant to be.", points: 4 },
    ],
  },
  {
    question: "You send a spicy selfie to someone. They send back an off topic text. What now?",
    options: [
      { text: "Text them back normally", points: 1 },
      { text: "Wonder if they have spagetti for brains", points: 2 },
      { text: "Leave them on opened for as long as it takes for them to figure it out", points: 3 },
      { text: "BLOCKED", points: 4 },
    ],
  },
  {
    question: "How often do you double text?",
    options: [
      { text: "I don’t care, I’ll say what I want, when I want", points: 1 },
      { text: "only if we were in the middle of something and they haven't responded in over an hour", points: 2 },
      { text: "I've done it a few times, but it never works.  Don't plan on doing it again", points: 3 },
      { text: "I NEVER EVER DOUBLE TEXT", points: 4 },
    ],
  },
];

const archetypes = [
  {
    range: [8, 12],
    title: "The Genuine Snapper 💛",
    description:
      "You use Snapchat for real connection, not manipulation. You’re honest, quick to respond, and avoid toxic patterns — even if that means you don’t win the “game.”",
  },
  {
    range: [13, 13],
    title: "The Thoughtful Texter 🌼",
    description:
      "You’re just starting to notice the game beneath the conversations. You’re genuine, but you’ve learned to protect your energy. You might delay your response once in a while, but your heart's still in the right place.",
  },
  {
    range: [14, 14],
    title: "The Netflix & Strategizer 📺🧠",
    description:
      "You're not cold, you're curated. You’ve mastered the art of looking effortless while quietly pulling strings behind the scenes. Mirroring dry energy? Deliberate. Taking a little longer to open a snap? Intentional. You’re never messy — just mildly mysterious. The vibe is casual, but the game? Subtly elite.",
  },
  {
    range: [15, 15],
    title: "The Responsive? Enigma 🔮",
    description:
      "You’re hard to pin down. Sometimes you're quick, sometimes you're slow, always keeping people guessing. You’re not out to play anyone — but if they think you are? That’s on them.",
  },
  {
    range: [16, 16],
    title: "The Semi-Smooth Operator 😏",
    description:
      "You know how the game works and play a little when you need to. You’re respectful but also strategic, with just a hint of chaos.",
  },
  {
    range: [17, 17],
    title: "The Tactical Flirter 🎯",
    description:
      "You flirt with intention. You open when it counts, delay when it’s powerful, and know how to keep people hooked. You’re not evil — just very effective at managing attention.",
  },
  {
    range: [18, 18],
    title: "The Whispering Wrecking Ball 🌀💋",
    description:
      "You’re not loud about it, but you know exactly how to mess with someone’s head — and do it with style. Snaps sent at the perfect time. Delays that make hearts race. You're the storm before the ghosting.",
  },
  {
    range: [19, 24],
    title: "The Low-Key Manipulator 😈",
    description:
      "You don’t even realize how calculated you are anymore. You timing, your messages, leave people on read with purpose, and know *exactly* what you're doing.",
  },
  {
    range: [25, 29],
    title: "The Mastermind 🧊",
    description:
      "You play 4D chess while others are playing checkers. No one knows if you actually like them or if they’re just another name on your streak list. Cold. Effective. Unreadable.",
  },
  {
    range: [30, 32],
    title: "The Snapchat Villain 🧨",
    description:
      "You ghost with zero remorse, streak with strangers, and snap like a robot. You're the final boss of Snapchat mind games — and honestly? People kind of love to hate you.",
  },
];


export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [presaveClicked, setPresaveClicked] = useState(false);
  const [confirmedPresave, setConfirmedPresave] = useState(false);

  const handlePresaveClick = () => {
    window.open(
      "https://venice.lnk.to/snapchatmindgames?fbclid=PAdGRleANJpPxleHRuA2FlbQIxMQABp-pYyijp80k5eYL3nF9e7DhXIYanL5VuXD2lRcQhyk1ccVqQUd3mId_c_o0I_aem_LpF9nEI5naHEByS-e3Rolg",
      "_blank"
    );
    setPresaveClicked(true);
  };

  const handleConfirmPresave = () => {
    setConfirmedPresave(true);
  };

  const handleOptionClick = (points) => {
    setScore(score + points);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const getArchetype = () => {
    return (
      archetypes.find((a) => score >= a.range[0] && score <= a.range[1]) || {
        title: "Unknown",
        description: "Something went wrong.",
      }
    );
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setPresaveClicked(false);
    setConfirmedPresave(false);
  };

  // Step 1: Quiz done, presave NOT clicked yet
  if (showResult && !presaveClicked) {
    return (
      <div
        style={{
          padding: 20,
          maxWidth: 600,
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2>Presave 'SNAPCHATMINDGAMES' to reveal your Snapchat Mind Games Archetype...</h2>
        <p>Just come back to this screen to see your results - on ig you have to hit the BACK arrow.  On browser you have to go back to this window</p>

        <button onClick={handlePresaveClick} style={{ margin: "10px" }}>
          Presave Now
        </button>
      </div>
    );
  }

  // Step 2: Presave clicked, waiting for confirmation
  if (showResult && presaveClicked && !confirmedPresave) {
    return (
      <div
        style={{
          padding: 20,
          maxWidth: 600,
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2>Thanks for presaving!</h2>
        <button onClick={handleConfirmPresave} style={{ margin: "10px" }}>
          I Presaved! Show me my results
        </button>
      </div>
    );
  }

  // Step 3: Show final quiz result after confirmation
  if (showResult && confirmedPresave) {
    const archetype = getArchetype();
    return (
      <div
        style={{
          padding: 20,
          maxWidth: 600,
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2>Your Snapchat Mind Games Archetype</h2>
        <h3>{archetype.title}</h3>
        <p>{archetype.description}</p>
        <p>Share your results and tag me on IG @aspenjade.vox</p>
        <button onClick={resetQuiz}>Try Again</button>
      </div>
    );
  }

  // Quiz questions UI
  const question = questions[currentQ];
  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h2>Snapchat Mind Games Quiz</h2>
      <p>
        Question {currentQ + 1} of {questions.length}
      </p>
      <h3>{question.question}</h3>
      <div>
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            style={{ display: "block", width: "100%", margin: "10px 0", padding: 10 }}
            onClick={() => handleOptionClick(opt.points)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
