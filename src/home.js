import { useState } from "react";
import "./App.css";
import questions from "./Data";
import Quizresult from "./Quizresult";

function Home() {
  const [curentQuestion, setCurentQuestion] = useState(0);
  const [score, setscore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showResult, setshowResult] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleNextOption = () => {
    setClicked(false)
    const nextQuestion = curentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurentQuestion(nextQuestion);
    } else {
      setshowResult(true);
    }
  };
  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setscore(score + 5);
      setCorrectAnswer(correctAnswer + 1);
    }
    setClicked(true)
  };
  const handlePlayAgain = ()=>{
    setCurentQuestion(0)
    setscore(0)
    setCorrectAnswer(0)
    setshowResult(false)
  }
  return (
    <div className="app">
      {showResult ? (
        <Quizresult scores={score} correctAnswers={correctAnswer} handlePlayAgain={handlePlayAgain} />
      ) : (
        <>
          <div className="question-section">
            <h5>Scores:{score}</h5>
            <div className="question-count">
              <span>
                Question {curentQuestion + 1} Of {questions.length}
              </span>
              <div className="question-text">
                {questions[curentQuestion].questionText}
              </div>
            </div>
          </div>
          <div className="answer-section">
            {questions[curentQuestion].answerOption.map((ans, i) => {
              return (
                <button
                className={`button ${clicked && ans.isCorrect? "correct":"button"}`}
                // disabled={clicked}
                  key={i}
                  onClick={() => handleAnswerOption(ans.isCorrect)}
                >
                  {ans.answerText}
                </button>
              );
            })}

            <div className="actions">
              <button onClick={handlePlayAgain}>Quit</button>
              <button disabled={!clicked} onClick={handleNextOption}>Next</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;