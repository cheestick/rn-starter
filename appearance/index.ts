const colors = {
  main: "hsla(210, 80%, 45%, 0.9)",
  primary: "hsla(210, 70%, 85%, 1)",
  secondary: "",
  accent: "",
  active: "",
  inactive: "",
  idle: "",
  disabled: "",
  white: "hsla(0, 0%, 100%, 1)",
  black: "hsla(0, 0%, 0%, 1)",
  text: {
    main: "hsla(0, 0%, 0%, 1)",
    light: "hsla(210, 70%, 92%, 1)",
    dark: "hsla(210, 70%, 35%, 1)",
  },
};

const text = {
  font: {},
  size: {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
    body: 18,
    heading: 30,
  },
  weight: {},
};

const statusBar = {
  height: 30,
};

export const theme = {
  bg: {
    primary: colors.primary,
  },
  color: {
    bg: {
      main: colors.main,
    },
    text: colors.text,
  },
  statusBar,
  text,
  utils: {
    radius: 10,
    width: 2,
  },
} as const;
