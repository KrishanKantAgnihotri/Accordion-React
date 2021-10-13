import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  let [questions, setquestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <div className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })
          }
        </div>
      </div>
    </main >
  );
}

export default App;
