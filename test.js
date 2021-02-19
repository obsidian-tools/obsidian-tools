const child_process_1 = require("child_process");

async function execPromise(cmd, args = []) {
  const callSite = new Error().stack;
  const filteredArgs = args.filter((arg) => typeof arg === "string");
  return new Promise((completed, reject) => {
    const child = child_process_1.spawn(cmd, filteredArgs, {
      cwd: process.cwd(),
      env: process.env,
      shell: true,
    });
    let allStdout = "";
    let allStderr = "";
    if (child.stdout) {
      child.stdout.pipe(process.stdout);
      child.stdout.on("data", async (data) => {
        const stdout = data.toString();
        allStdout += stdout;
      });
    }
    if (child.stderr) {
      child.stderr.pipe(process.stderr);
      child.stderr.on("data", (data) => {
        const stderr = data.toString();
        allStderr += stderr;
      });
    }
    // This usually occurs during dev-time, when you have the wrong command
    child.on("error", (err) => {
      reject(
        new Error(`Failed to run '${cmd}' - ${err.message} \n\n\n${allStderr}`)
      );
    });
    child.on("exit", (code) => {
      // No code, no errors
      if (code) {
        // The command bailed for whatever reason, print a verbose error message
        // with the stdout underneath
        let appendedStdErr = "";
        appendedStdErr += allStdout.length ? `\n\n${allStdout}` : "";
        appendedStdErr += allStderr.length ? `\n\n${allStderr}` : "";
        const argList = filteredArgs
          .join(", ")
          .replace(
            new RegExp(`${process.env.GH_TOKEN}`, "g"),
            `****${(process.env.GH_TOKEN || "").slice(-4)}`
          );
        const error = new Error(
          `Running command '${cmd}' with args [${argList}] failed${appendedStdErr}`
        );
        error.stack = (error.stack || "") + callSite;
        reject(error);
      } else {
        // Tools can occasionally print to stderr but not fail, so print that just in case.
        if (allStderr.length) {
          console.warn(allStderr);
        }
        // Resolve the string of the whole stdout
        completed(allStdout.trim());
      }
    });
  });
}

(async () => {
  await execPromise("npx", ["is-ci"]);
})();
