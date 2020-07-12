const $colors = {
  primary: {
    light: "#ff7043",
    main: "#ff5722",
    dark: "#bf360c",
  },
  secondary: {
    main: "#007c91",
  },
  gray: {
    light: "#616161",
    main: "#424242",
  },
} as const;

const $boxShadows = {
  "1dp":
    "0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
  "4dp":
    "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);",
} as const;

export { $colors, $boxShadows };
