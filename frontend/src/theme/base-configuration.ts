import {
  ColorContrastOptions,
  colorPalette,
  getColorContrastOptions,
} from "./color-palette";
export const fontSizeBase = 13;

export const fonts = {
  inter: "'Inter', sans-serif",
};

type Mode = "dark" | null;
interface ColorOption {
  color: string;
  darkMode?: string;
}

interface Palette {
  blue: ColorContrastOptions;
  indigo: ColorContrastOptions;
  teal: ColorContrastOptions;
  poolBlue: ColorContrastOptions;
  white: ColorOption;
  black: ColorOption;
  neutralGrey: ColorContrastOptions;
  coolGrey: ColorContrastOptions;
  flatGrey: ColorContrastOptions;
  brightGrey: ColorContrastOptions;
  green: ColorContrastOptions;
  forest: ColorContrastOptions;
  squash: ColorContrastOptions;
  orange: ColorContrastOptions;
  red: ColorContrastOptions;
  maroon: ColorContrastOptions;
  magenta: ColorContrastOptions;
  purple: ColorContrastOptions;
  violet: ColorContrastOptions;
  ultramarine: ColorContrastOptions;
}

interface Shape {
  borderRadius: number;
  borderRadiusLight: number;
  borderRadiusHeavy: number;
  borderRadiusCircle: string;
}

interface FontParams {
  fontSize: string;
  fontWeight: number;
  fontFamily: string;
}

interface Typography {
  fontBaseSize: number;
  h1: FontParams;
  h2: FontParams;
  h3: FontParams;
  h4: FontParams;
  h5: FontParams;
  p: FontParams;
  li: FontParams;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
}
interface Level {
  normal: number;
  medium: number;
  high: number;
  max: number;
}

export interface AwTheme {
  version: number;
  mode: Mode;
  palette: Palette;
  shape: Shape;
  typography: Typography;
  shadows: string[];
  transitions: {
    slow: string;
    medium: string;
    fast: string;
  };
  zIndex: Level;
}

const defaultTheme: AwTheme = {
  version: 1,
  mode: null,
  palette: {
    blue: getColorContrastOptions(colorPalette.blue),
    indigo: getColorContrastOptions(colorPalette.indigo),
    teal: getColorContrastOptions(colorPalette.teal),
    poolBlue: getColorContrastOptions(colorPalette.poolBlue),
    white: { color: colorPalette.white },
    black: { color: colorPalette.black },
    neutralGrey: getColorContrastOptions(colorPalette.neutralGrey),
    coolGrey: getColorContrastOptions(colorPalette.coolGrey),
    flatGrey: getColorContrastOptions(colorPalette.flatGrey),
    brightGrey: getColorContrastOptions(colorPalette.brightGrey),
    green: getColorContrastOptions(colorPalette.green),
    forest: getColorContrastOptions(colorPalette.forest),
    squash: getColorContrastOptions(colorPalette.squash),
    orange: getColorContrastOptions(colorPalette.orange),
    red: getColorContrastOptions(colorPalette.red),
    maroon: getColorContrastOptions(colorPalette.maroon),
    magenta: getColorContrastOptions(colorPalette.magenta),
    purple: getColorContrastOptions(colorPalette.purple),
    violet: getColorContrastOptions(colorPalette.violet),
    ultramarine: getColorContrastOptions(colorPalette.ultramarine),
  },
  shape: {
    borderRadius: 10,
    borderRadiusLight: 4,
    borderRadiusHeavy: 20,
    borderRadiusCircle: "50%",
  },
  typography: {
    fontBaseSize: fontSizeBase,
    h1: {
      fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
      fontWeight: 800,
      fontFamily: fonts.inter,
    },
    h2: {
      fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
      fontWeight: 800,
      fontFamily: fonts.inter,
    },
    h3: {
      fontSize: "2.25rem",
      fontWeight: 400,
      fontFamily: fonts.inter,
    },
    h4: { fontSize: "1.75rem", fontWeight: 400, fontFamily: fonts.inter },
    h5: { fontSize: "1rem", fontWeight: 600, fontFamily: fonts.inter },
    p: { fontSize: "1rem", fontWeight: 400, fontFamily: fonts.inter }, // paragraph
    li: { fontSize: "1rem", fontWeight: 400, fontFamily: fonts.inter },
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shadows: [
    "0px 1px 15px rgba(0, 41, 146, 0.07)",
    "1px 1px 25px rgba(0, 0, 0, 0.1)",
  ],
  transitions: {
    slow: "1s ease-in-out",
    medium: ".5s ease-in-out",
    fast: ".2s ease-in-out",
  },
  zIndex: { normal: 0, medium: 250, high: 500, max: 1000 },
};

export default defaultTheme;
