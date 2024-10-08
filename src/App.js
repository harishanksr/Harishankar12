import React, { useState } from "react";
import MainScreen from "./MainScreen";
import MobileScreen from "./MobileScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [message, setMessage] = useState("");

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
      correct: "C",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["A. Earth", "B. Mars", "C. Venus", "D. Jupiter"],
      correct: "B",
    },
    // Add more questions as needed
  ];

  const addPlayer = (name) => {
    setPlayers([...players, { name }]);
  };

  const submitAnswer = (answer, player) => {
    if (answer === questions[currentQuestionIndex].correct) {
      setMessage(`Congratulations ${player}!`);
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setMessage("");
      }, 2000);
    } else {
      setMessage(`Sorry ${player}, wrong answer!`);
      setTimeout(() => setMessage(""), 2000);
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainScreen
            players={players}
            question={questions[currentQuestionIndex]}
            message={message}
          />
        </Route>
        <Route path="/join">
          <MobileScreen
            addPlayer={addPlayer}
            question={questions[currentQuestionIndex]}
            submitAnswer={submitAnswer}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
