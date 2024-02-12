import React, { FC } from "react";
import { createUseStyles } from "react-jss";

import { icons } from "../../icons";
import { AwTheme } from "../../theme";

interface CollapseButtonProps {
  isCollapsed: boolean;
  onCollapse: () => void;
}

export const CollapseButton: FC<CollapseButtonProps> = ({
  isCollapsed,
  onCollapse,
}) => {
  const styles = useStyles();

  return (
    <button className={styles.toggleButton} onClick={onCollapse}>
      <img src={isCollapsed ? icons.panelOpen : icons.panelClose} />
    </button>
  );
};

const useStyles = createUseStyles((theme: AwTheme) => ({
  toggleButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    padding: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    background: "none",
    borderRadius: theme.shape.borderRadius,

    "&:hover": {
      background: theme.palette.brightGrey.extraLight,
    },
  },
}));
