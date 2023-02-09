import React from 'react'
import questions from './Data'
import "./App.css";

export default function Quizresult(props) {
  return (
    <div className='score-section'>
        <h2>Completed !!!</h2>
        <h4>Total Scores is {props.scores} /30</h4>
        <h4>Your Correct Answer is {props.correctAnswers} out of {questions.length}</h4>
        <button onClick={props.handlePlayAgain}>Play Again</button>
    </div>
  )
}