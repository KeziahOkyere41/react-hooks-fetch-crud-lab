import React from "react";

function QuestionItem({ question, onItemDelete, onAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete (e){
    onItemDelete(e.target.id)
  }

  function handleAnswer(e){
    onAnswerChange(e.target.id, parseInt(e.target.value))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} id={id} onChange={handleAnswer}>{options}</select>
      </label>
      <button id = {id} onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;