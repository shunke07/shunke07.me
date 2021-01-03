const $colors = {
  primary: {
    light: "#f57c00", // material orange 700
    main: "#ef6c00", // material orange 800
    dark: "#b53d00", // material orange 800 dark
  },
  secondary: {
    main: "#00838f", // material cyan 800
  },
} as const;

const $boxShadows = {
  "1dp":
    "0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
  "4dp":
    "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);",
} as const;

export { $colors, $boxShadows };
