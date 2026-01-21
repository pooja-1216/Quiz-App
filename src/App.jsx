import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const questions = [
    {
      question: "What is React?",
      options: ["A JavaScript library", "A database", "A framework", "A language"],
      answer: "A JavaScript library"
    },
    {
      question: "Who developed React?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: "Facebook"
    },
    {
      question: "What is JSX?",
      options: ["JavaScript XML", "HTML", "CSS", "JSON"],
      answer: "JavaScript XML"
    },
    {
      question: "Which hook is used for state?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState"
    },
    {
      question: "Which hook is used for side effects?",
      options: ["useState", "useEffect", "useRef", "useCallback"],
      answer: "useEffect"
    },
    {
      question: "React components must start with?",
      options: ["Lowercase letter", "Number", "Capital letter", "Symbol"],
      answer: "Capital letter"
    },
    {
      question: "Which command creates a React app using Vite?",
      options: ["npm create vite@latest", "npm init react", "npm start react", "create-react-app"],
      answer: "npm create vite@latest"
    },
    {
      question: "Which file is the main component?",
      options: ["index.js", "App.jsx", "main.jsx", "package.json"],
      answer: "App.jsx"
    },
    {
      question: "Props are used to?",
      options: ["Store data", "Pass data to components", "Handle events", "Style components"],
      answer: "Pass data to components"
    },
    {
      question: "State in React is?",
      options: ["Immutable", "Mutable", "Static", "Optional"],
      answer: "Mutable"
    },
    {
      question: "Which keyword is used to export a component?",
      options: ["return", "export", "default", "component"],
      answer: "export"
    },
    {
      question: "What is Virtual DOM?",
      options: ["A copy of real DOM", "Database", "Browser API", "CSS engine"],
      answer: "A copy of real DOM"
    },
    {
      question: "Which hook runs on component mount?",
      options: ["useState", "useEffect", "useRef", "useReducer"],
      answer: "useEffect"
    },
    {
      question: "How do you pass data to a component?",
      options: ["State", "Props", "Hooks", "Context"],
      answer: "Props"
    },
    {
      question: "Which event handles button clicks?",
      options: ["onClick", "onSubmit", "onChange", "onPress"],
      answer: "onClick"
    },
    {
      question: "What is React mainly used for?",
      options: ["Backend development", "Database management", "Building UI", "Testing"],
      answer: "Building UI"
    },
    {
      question: "Which hook is used to reference DOM elements?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      answer: "useRef"
    },
    {
      question: "Which operator is used to render conditionally?",
      options: ["if", "for", "ternary", "while"],
      answer: "ternary"
    },
    {
      question: "What does npm stand for?",
      options: ["Node Package Manager", "New Product Model", "Node Program Mode", "Network Package Manager"],
      answer: "Node Package Manager"
    },
    {
      question: "Which file contains dependencies?",
      options: ["index.html", "package.json", "App.jsx", "main.jsx"],
      answer: "package.json"
    },
    {
      question: "Which hook optimizes performance?",
      options: ["useMemo", "useState", "useEffect", "useRef"],
      answer: "useMemo"
    },
    {
      question: "React is based on which architecture?",
      options: ["MVC", "MVVM", "Component-based", "Monolithic"],
      answer: "Component-based"
    },
    {
      question: "What is lifting state up?",
      options: ["Deleting state", "Sharing state between components", "Updating state", "Resetting state"],
      answer: "Sharing state between components"
    },
    {
      question: "Which hook manages complex state?",
      options: ["useState", "useEffect", "useReducer", "useRef"],
      answer: "useReducer"
    },
    {
      question: "Which command runs the React app?",
      options: ["npm run dev", "npm build", "npm test", "npm eject"],
      answer: "npm run dev"
    },
    {
      question: "Which tag is used to return multiple elements?",
      options: ["div", "span", "Fragment", "section"],
      answer: "Fragment"
    },
    {
      question: "Which hook shares global data?",
      options: ["useState", "useContext", "useEffect", "useRef"],
      answer: "useContext"
    },
    {
      question: "What does key prop help with?",
      options: ["Styling", "Performance in lists", "Routing", "State handling"],
      answer: "Performance in lists"
    },
    {
      question: "React uses which language?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript"
    },
    {
      question: "Which lifecycle method is replaced by useEffect?",
      options: ["componentDidMount", "render", "constructor", "componentWillUnmount"],
      answer: "componentDidMount"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(15);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (showResult) return;
    if (time === 0) nextQuestion();

    const timer = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time, showResult]);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(prev => prev + 1);
    }
    setTimeout(nextQuestion, 800);
  };

  const nextQuestion = () => {
    setSelected(null);
    setTime(15);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="box">
        <h2>Quiz Completed 🎉</h2>
        <h3>Score: {score} / {questions.length}</h3>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
    );
  }

  return (
    <div className="box">
      <h2>Question {current + 1}</h2>
      <p>{questions[current].question}</p>
      <p>⏱ {time}s</p>

      {questions[current].options.map((option, i) => {
        let className = "option";
        if (selected) {
          if (option === questions[current].answer) className += " correct";
          else if (option === selected) className += " wrong";
        }

        return (
          <button
            key={i}
            className={className}
            onClick={() => handleAnswer(option)}
            disabled={selected}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default App;
