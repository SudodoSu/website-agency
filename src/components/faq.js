import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FAQ({ questions }) {
  const [activeFaq, setActiveFaq] = useState(-1);
  const [verify, setVerify] = useState(false);
  const [count, setCount] = useState(0);

  function handleActiveFaq(index) {
    if (activeFaq === index && count !== 1) {
      setVerify(false);
      setCount((event) => event + 1);
    } else {
      setVerify(true);
      setCount(0);
    }
    setActiveFaq(index);
  }

  return (
    <>
      {questions.map((question, index) => (
        <article key={index} className="question">
          <div
            onClick={() => handleActiveFaq(index)}
            className={`faq-title ${
              activeFaq === index && verify ? "active-faq-title" : ""
            }`}
          >
            <h4>{question.title}</h4>
            <FontAwesomeIcon
              className={`faq-arrow ${
                activeFaq === index && verify
                  ? "faq-arrow-animation"
                  : "faq-arrow-animation-down"
              }`}
              icon={faChevronDown}
              style={{ color: "#112d4e" }}
            />
          </div>
          <div
            className={`faq-des ${
              activeFaq === index && verify ? "active-faq" : ""
            }`}
          >
            <p>{question.des}</p>
          </div>
        </article>
      ))}
    </>
  );
}

export default FAQ;
