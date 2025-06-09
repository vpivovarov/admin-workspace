import React from "react";
import { createUseStyles } from "react-jss";

import { AwTheme } from "../../theme";
import { fonts } from "../../theme/base-configuration";
import { Page, Sidebar } from "../";

/**
 * App component
 */
function App() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Sidebar />
      <Page />
    </div>
  );
}

export default App;

const useStyles = createUseStyles((theme: AwTheme) => ({
  "@global": {
    html: {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: fonts.inter,
    },
  },
  root: {
    width: "100vw",
    height: "100vh",
  },
}));
