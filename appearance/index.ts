const colors = {
  main: "",
  primary: "",
  secondary: "",
  accent: "",
  active: "",
  inactive: "",
  idle: "",
  disabled: "",
  text: {
    main: "hsla(0, 0%, 0%, 1)",
    light: "hsla(210, 70%, 92%, 1)",
    dark: "hsla(210, 70%, 5%, 1)",
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
    primary: "hsla(210, 70%, 85%, 1)",
  },
  color: {
    bg: {
      main: "hsla(210, 80%, 45%, 0.9)",
    },
    text: colors.text,
  },
  text,
  statusBar,
} as const;
