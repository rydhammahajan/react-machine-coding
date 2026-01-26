import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./styles.css";

const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

function FaqAccordion() {

  const [open, setOpen] = useState(-1); 
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div data-testid={`faq-item-${index}`}  className="faq-item" key={index} onClick={() => {
          setOpen(prev =>  prev == index ? -1 : index)
        }}>
          <button className="faq-question" data-testid={`faq-question-${index}`}>
            <span >{faq.question}</span>
            {open != index && <span data-testid={`icon-down-${index}`} className="faq-icon">
              <FiChevronDown />
            </span>}
            {open == index && <span data-testid={`icon-up-${index}`} className="faq-icon">
              <FiChevronUp />
            </span>}
          </button>
          {open == index && <div className="faq-answer" data-testid={`faq-answer-${index}`}>{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
