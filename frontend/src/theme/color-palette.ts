/* eslint-disable @typescript-eslint/no-magic-numbers */
interface ColorPalette {
  blue: string;
  indigo: string;
  teal: string;
  poolBlue: string;
  white: string;
  black: string;
  neutralGrey: string;
  coolGrey: string;
  flatGrey: string;
  brightGrey: string;
  green: string;
  forest: string;
  squash: string;
  orange: string;
  red: string;
  maroon: string;
  magenta: string;
  purple: string;
  violet: string;
  ultramarine: string;
}

export const colorPalette: ColorPalette = {
  blue: "#113B98",
  indigo: "#00538E",
  teal: "#004B61",
  poolBlue: "#447C76",
  white: "#ffffff",
  black: "#000000",
  neutralGrey: "#4F4D55",
  coolGrey: "#474B55",
  flatGrey: "#383838",
  brightGrey: "#353528",
  green: "#016626",
  forest: "#456C2F",
  squash: "#9D6508",
  orange: "#9D3713",
  red: "#961616",
  maroon: "#7E1639",
  magenta: "#751556",
  purple: "#631C71",
  violet: "#491786",
  ultramarine: "#20038B",
};

export interface ColorContrastOptions {
  extraLight: string;
  light: string;
  color: string;
  dark: string;
  extraDark: string;
  darkMode: string;
}

export const getColorContrastOptions = (
  baseColor: string,
  dark: string = colorPalette.white
): ColorContrastOptions => {
  return {
    extraLight: addAlpha(colorLuminance(baseColor, "200"), 20),
    light: addAlpha(colorLuminance(baseColor, "400"), 40),
    color: baseColor,
    dark: colorLuminance(baseColor, "600"),
    extraDark: colorLuminance(baseColor, "800"),
    darkMode: dark,
  };
};

type LuminteOptions = "200" | "400" | "500" | "600" | "800";

// Update HEX color lightness
const colorLuminance = (hex: string, lum: LuminteOptions = "500") => {
  // Lightness values
  const contrastToDecimal = {
    "200": 0.8,
    "400": 0.4,
    "600": -0.4,
    "800": -0.8,
  };

  // validate hex
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // convert to decimal and change luminosity
  const decLum = contrastToDecimal[lum] || 0;
  let newHex = "#";
  let primaryColorInt = 0;
  let index = 0;

  for (index; index < 3; index++) {
    primaryColorInt = parseInt(hex.substr(index * 2, 2), 16);
    primaryColorInt = Math.round(
      Math.min(Math.max(0, primaryColorInt + primaryColorInt * decLum), 255)
    );

    const hexadecimalPrimaryColor = primaryColorInt.toString(16);

    newHex += hexadecimalPrimaryColor;
  }

  return newHex;
};

const addAlpha = (hex: string, opacity: number) => {
  return hex + opacity;
};
