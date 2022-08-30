import * as core from "./core.js";

test(
  "prints a schema without default mutations",
  core.test(__filename, "c", {
    disableDefaultMutations: true,
    setofFunctionsContainNulls: false,
  }),
);
