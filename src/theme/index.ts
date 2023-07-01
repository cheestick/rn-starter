const colors = {
  white: "hsla(0, 0%, 100%, 1)",
  black: "hsla(0, 0%, 0%, 1)",
  almostBlack: "hsla(0, 50%, 10%, .95)",
  almostWhite: "hsla(0, 50%, 90%, .95)",
  primary: {},
  secondary: {},
  accent: {},
  disabled: {},
  background: "hsla(0, 60%, 70%, 1)",
  screens: {
    home: "hsla(100, 60%, 90%, 1)",
    review: "hsla(300, 60%, 90%, 1)",
    about: "hsla(210, 60%, 90%, 1)",
  },
};

const text = {
  font: {
    regular: "nunito-regular",
    semibold: "nunito-semibold",
  },
  size: {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 30,
    body: 18,
    heading: 28,
  },
};

const utils = {
  width: 2,
  radius: 10,
};

export const theme = {
  colors,
  text,
  utils,
} as const;
