import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(async () => {
      const response = await fetch("/ping", { method: "get" });

      if (!response.ok) {
        return;
      }

      const text = await response.text();
      setText(text);
    }, 500);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {text ? (
          <p>Response from the server is {text}.</p>
        ) : (
          <span>loading...</span>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
