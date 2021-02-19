const colors = {
  debug: "#D1D5DB",
  info: "#93C5FD",
  warn: "#FCD34D",
  error: "#FCA5A5",
  success: "#6EE7B7",
};

type LogLevel = "debug" | "info" | "warn" | "error" | "success";

const logger = (type: LogLevel | "table") => (...args: any[]) => {
  switch (type) {
    case "debug":
    case "info":
    case "success":
      console.debug(...logPrefix(`obsidian-plugin-utils ${type}`), ...args);
      break;
    case "warn":
      console.warn(...logPrefix(`obsidian-plugin-utils ${type}`), ...args);
      break;
    case "error":
      console.error(...logPrefix(`obsidian-plugin-utils ${type}`), ...args);
      break;
    case "table":
      console.table(...args);
  }
};

const logPrefix = (
  text: string,
  bgColor: "debug" | "info" | "warn" | "error" | "success" = "debug",
  color: string = "black"
) => {
  return [
    `%c${text.toUpperCase()}`,
    `background-color: ${colors[bgColor]}; padding: 4px; color: ${color}; font-weight: bold; border-radius: 4px;`,
  ];
};

export default {
  debug: logger("debug"),
  info: logger("info"),
  success: logger("success"),
  warn: logger("warn"),
  error: logger("error"),
  table: logger("table"),
};
