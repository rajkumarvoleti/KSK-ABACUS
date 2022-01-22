const getDesignTokens = (mode) => ({
  palette: {
    mode,
    blue: "#038C8C",
    black: "#002C2E",
    orange: "#FF8749",
    white: "#E6F4F1",
    headFont1: {
      fontFamily: "Aurella",
      src: "url(/Aurella.ttf)",
    },
    headFont2: {
      fontFamily: "Youth",
      src: "url(/Youth.ttf)",
    },
  },
});

// main: "#2357B8",
export default getDesignTokens;
