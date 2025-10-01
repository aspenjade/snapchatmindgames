import React, { useState, useRef, useEffect } from 'react';
import Quiz from './quiz';
import './App.css';
import StoryRouter from './StoryRouter';

const cards = [
  { image: '/laNewGirl.jpg', name: 'la_new_girl' },
  { image: '/travelBabe.jpg', name: 'travel_babe' }
];


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showQuiz, setShowQuiz] = useState(false);
  const [chosenCharacter, setChosenCharacter] = useState(null);
  const touchStartX = useRef(null);


  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return (
      <div className="welcome-screen">
        {/* <h1>
        You ready to play <span className="snap">SNAPCHATMINDGAMES</span>?
      </h1> */}
        {/* <button
          onClick={() => setShowWelcome(false)}
          style={{
            marginTop: '2rem',
            backgroundColor: '#7734A3',
            border: 'none',
            padding: '12px 24px',
            fontSize: '18px',
            borderRadius: '10px',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Play Story Mode
        </button> */}
      <button
        onClick={() => {
          setShowWelcome(false);
          setShowQuiz(true);
        }}
        style={{
          marginTop: '1rem',
          backgroundColor: '#2598C2',
          border: 'none',
          padding: '12px 24px',
          fontSize: '18px',
          borderRadius: '10px',
          color: '#fff',
          cursor: 'pointer',
          fontWeight: 'bold',
          display: 'block',
          width: '200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Take the Quiz
      </button>
    </div>
  );
}

if (showQuiz) {
  return <Quiz />;
}

  // 2. After a character is chosen, show the story
  if (chosenCharacter) {
    return <StoryRouter character={chosenCharacter} />;
  }

  // 3. Otherwise, show character select
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) goNext();
    else if (diff < -50) goPrev();
  };

  const handleChoose = () => {
    const character = cards[currentIndex];
    setChosenCharacter(character);
  };

  return (
    <div className="app">
      <div className="card-container">
        <button className="arrow left" onClick={goPrev}>&lt;</button>

        <div
          className="card"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={cards[currentIndex].image}
            alt={cards[currentIndex].name}
            className="card-image"
          />
        </div>

        <button className="arrow right" onClick={goNext}>&gt;</button>
      </div>

      <button onClick={handleChoose}>Choose</button>
    </div>
  );
}

export default App;
