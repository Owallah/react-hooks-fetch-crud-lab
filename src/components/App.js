import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsList, setQuestionsList] = useState([])

  const url = 'http://localhost:3000/questions'
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setQuestionsList(data))
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questionsList={questionsList} setQuestionsList={setQuestionsList} /> : <QuestionList questionsList={questionsList} setQuestionsList={setQuestionsList} />}
    </main>
  );
}

export default App;
