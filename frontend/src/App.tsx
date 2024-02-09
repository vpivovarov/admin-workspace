import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import { fonts } from "./theme/base-configuration";
import { AwTheme } from "./theme";

/**
 * App component
 */
function App() {
  const [text, setText] = useState("");

  const styles = useStyles();

  useEffect(() => {
    const randomTime = 500;

    const timerId = setTimeout(async () => {
      const response = await fetch("/ping", { method: "get" });

      if (!response.ok) {
        return;
      }

      const text = await response.text();
      setText(text);
    }, randomTime);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={styles.root}>
      <header className="App-header">
        {text ? (
          <p className={styles.text}>Response from the server is {text}.</p>
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

const useStyles = createUseStyles((theme: AwTheme) => ({
  root: {
    background: theme.palette.blue.extraLight,
  },
  text: {
    fontFamily: fonts.inter,
    fontSize: "13px",
  },
}));
