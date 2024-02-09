import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import { fonts } from "./theme/base-configuration";
import { Text } from "./components";
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
          <Text tag="span" variant="body">
            Response from the server is {text}.
          </Text>
        ) : (
          <span>loading...</span>
        )}
        <Text tag="a" variant="bodyError">
          Learn React
        </Text>
      </header>
    </div>
  );
}

export default App;

const useStyles = createUseStyles((theme: AwTheme) => ({
  root: {
    // background: theme.palette.coolGrey.extraDark,
  },
  text: {
    fontFamily: fonts.inter,
    fontSize: "13px",
  },
}));
