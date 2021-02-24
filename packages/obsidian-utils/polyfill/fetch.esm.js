export let fetchPolyfill = (...args) => {
  if (typeof window !== "undefined") {
    return window.fetch(...args);
  }
  return import("node-fetch")(...args);
};
