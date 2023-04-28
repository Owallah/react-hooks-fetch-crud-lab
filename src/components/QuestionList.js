import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionsList, setQuestionsList}) {

  const questionItem = questionsList.map((question) => {
    return <QuestionItem key={question.id} question={question} questionsList={questionsList} setQuestionsList={setQuestionsList} />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {questionItem}
      </ul>
    </section>
  );
}

export default QuestionList;
