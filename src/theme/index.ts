const colors = {
  white: "hsla(0, 0%, 100%, 1)",
  black: "hsla(0, 0%, 0%, 1)",
  primary: {},
  secondary: {},
  accent: {},
  disabled: {},
  background: "hsla(0, 60%, 70%, 1)",
};

const text = {
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
