import React from "react";
import Link from "next/link";

const styles = {
  section: "py-10 bg-white sm:py-16 lg:py-24",
  container: "max-w-6xl px-4 mx-auto sm:px-6 lg:px-8",
  title: "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl",
  flowRoot: "flow-root mt-12 sm:mt-16",
  divide: "divide-y divide-gray-200 -my-9",
  py: "py-9",
  question: "text-xl font-semibold text-black",
  answer: "mt-3 text-base text-gray-600",
  link: "text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline",
};

const faqs = [
  {
    question: "What features does the AI Chatbot offer?",
    answers: [
      "Our AI Chatbot provides instant responses to your queries, offering assistance in various areas such as academics, college recommendations, and more. It's designed to understand natural language and provide accurate and helpful information.",
    ],
  },
  {
    question: "How does the voice assistant work?",
    answers: [
      "The voice assistant allows you to interact with the system using voice commands. It can transcribe your speech into text, process the information, and provide verbal responses, making it easier to get the help you need without typing.",
      "Simply click the microphone icon, speak your query, and the assistant will respond.",
    ],
  },
  {
    question: "How does the college recommendation system work?",
    answers: [
      "Our system analyzes your academic performance, interests, and preferences to recommend colleges that best fit your profile. It leverages AI to provide personalized suggestions, helping you make informed decisions about your education.",
    ],
  },
  {
    question: "How do I access the admin dashboard?",
    answers: [
      "The admin dashboard is accessible to authorized users. It provides tools to manage the chatbot, monitor interactions, and view analytics. To gain access, please contact our support team at the admin ",
      
    ],
  },
];


const Faqs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.flowRoot}>
          <div className={styles.divide}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.py}>
                <p className={styles.question}>{faq.question}</p>
                {faq.answers.map((answer, i) => (
                  <p key={i} className={styles.answer}>
                    {answer}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
