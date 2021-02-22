import { Hook } from "@oclif/config";
import updateNotifier from "update-notifier";

export const hook: Hook<"init"> = async (options) => {
  const pkg = options.config.pjson;
  const notifier = updateNotifier({
    pkg,
    updateCheckInterval: 1000 * 60 * 60,
    shouldNotifyInNpmScript: true,
  });

  if (notifier.update) {
    notifier.notify();
  }
};

export default hook;
