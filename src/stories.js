export const stories = {
  venice: {
    start: {
      text: "You just moved to Venice Beach. What's your first move?",
      choices: [
        { text: "Hit the skate park 🛹", next: "skate" },
        { text: "Grab an acai bowl 🥣", next: "acai" },
      ],
    },
    skate: {
      text: "You meet some cool locals skating. They invite you to a bonfire tonight.",
      choices: [
        { text: "Say yes 🔥", next: "bonfire" },
        { text: "Decline, too tired 😴", next: "rest" },
      ],
    },
    acai: {
      text: "The acai bowl is delicious, but you spot an old flame across the cafe.",
      choices: [
        { text: "Wave hi 👋", next: "wave" },
        { text: "Ignore and eat", next: "ignore" },
      ],
    },
    bonfire: {
      text: "The night is magical, stars and stories. You feel alive.",
      choices: [],
    },
    rest: {
      text: "You rest up, dreaming of Venice sunsets.",
      choices: [],
    },
    wave: {
      text: "They smile back. Is this fate or coincidence?",
      choices: [],
    },
    ignore: {
      text: "Sometimes, it's better to keep your distance.",
      choices: [],
    },
  },

  banker: {
    start: {
      text: "Corporate life never sleeps. Your phone buzzes with an invite.",
      choices: [
        { text: "Hit the club 💃", next: "club" },
        { text: "Work late again 🖥️", next: "work" },
      ],
    },
    club: {
      text: "The club is wild. You spot someone intriguing across the dance floor.",
      choices: [
        { text: "Approach them 🕺", next: "dance" },
        { text: "Keep your distance 👀", next: "observe" },
      ],
    },
    work: {
      text: "The spreadsheet wins. Another lonely night at the office.",
      choices: [],
    },
    dance: {
      text: "The dance is electric. Sparks fly.",
      choices: [],
    },
    observe: {
      text: "Sometimes, watching is better than acting.",
      choices: [],
    },
  },

  bali: {
    start: {
      text: "You've just touched down in Bali, free spirit unleashed.",
      choices: [
        { text: "Explore the markets 🛍️", next: "markets" },
        { text: "Head to the beach 🏖️", next: "beach" },
      ],
    },
    markets: {
      text: "The colors and smells intoxicate you.",
      choices: [
        { text: "Buy a trinket 🎁", next: "trinket" },
        { text: "Just wander 🚶‍♀️", next: "wander" },
      ],
    },
    beach: {
      text: "The ocean calls your name, waves crashing in rhythm with your heart.",
      choices: [],
    },
    trinket: {
      text: "You find a lucky charm. Maybe luck is on your side.",
      choices: [],
    },
    wander: {
      text: "Sometimes the journey is the destination.",
      choices: [],
    },
  },
};
