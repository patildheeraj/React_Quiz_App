/* eslint-disable no-unreachable */
import React, { useState } from "react";

const QuestionBox = ({ question, option, selected }) => {
  const [answer, setAnswer] = useState(option);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
