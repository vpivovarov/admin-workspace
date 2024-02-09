import React, { PropsWithChildren, useMemo } from "react";
import { createUseStyles } from "react-jss";

import { AwTheme } from "../../theme";
import { fonts } from "../../theme/base-configuration";

type Tag = "a" | "p" | "span" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Variant = "body" | "h1" | "bodyError";

interface TextProps {
  tag: Tag;
  variant: Variant;
}

interface StyleProps {
  variant: Variant;
}

const Text = ({ tag, variant, children }: PropsWithChildren<TextProps>) => {
  const styles = useStyles({ variant });

  const ComponentTag = useMemo(() => {
    return `${tag}` as keyof JSX.IntrinsicElements;
  }, [tag]);

  return <ComponentTag className={styles[variant]}>{children}</ComponentTag>;
};

export default Text;

{
}
const useStyles = createUseStyles<Variant, StyleProps>((theme: AwTheme) => ({
  body: {
    fontFamily: fonts.inter,
    fontSize: "13px",
    fontWeight: 400,
    color: theme.palette.neutralGrey.extraDark,
  },
  h1: {
    fontFamily: fonts.inter,
    fontSize: "32px",
    fontWeight: 500,
    color: theme.palette.neutralGrey.extraDark,
  },
  bodyError: {
    fontFamily: fonts.inter,
    fontSize: "13px",
    fontWeight: 400,
    color: theme.palette.red.extraLight,
  },
}));
