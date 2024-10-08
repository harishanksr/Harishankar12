import React from "react";
import QRCode from "qrcode.react";

const MainScreen = ({ players, question, message }) => {
  return (
    <div>
      <h1> QUIZ Game</h1>
      <QRCode value="http://localhost:3000/join" size={256} />
      <h2>Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>

      <div>
        <h2>Question:</h2>
        <p>{question.question}</p>
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>

      {message && <h2>{message}</h2>}
    </div>
  );
};

export default MainScreen;
