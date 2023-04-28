import React from "react";

function QuestionItem({ question, questionsList, setQuestionsList }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index} onChange={() => {
      console.log(answer);
      
    }}>
      {answer}
    </option>
  ));

  const handleDelete = (e) => {
    fetch(`http://localhost:3000/questions/${id}`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      let remainingQuestions = questionsList.filter(questionItem => questionItem.id !== id)
      setQuestionsList(remainingQuestions)
    })
  }

  const handleChange = (e) => {
    const answer = e.target.value
    fetch(`http://localhost:3000/questions/${id}`,{
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        correctIndex:answer
        })
      })
    }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
