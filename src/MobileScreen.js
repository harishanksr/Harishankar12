import React, { useState } from "react";

const MobileScreen = ({ addPlayer, question, submitAnswer }) => {
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleJoin = () => {
    addPlayer(name);
    setJoined(true);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      submitAnswer(selectedOption, name);
    }
  };

  return (
    <div>
      {!joined ? (
        <div>
          <h2>Enter your name to join</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button onClick={handleJoin}>Join Game</button>
        </div>
      ) : (
        <div>
          <h2>{question.question}</h2>
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(option)}
              style={{
                backgroundColor:
                  selectedOption === option ? "lightblue" : "white",
              }}
            >
              {option}
            </button>
          ))}
          <br />
          <button onClick={handleSubmit}>Submit Answer</button>
        </div>
      )}
    </div>
  );
};

export default MobileScreen;
