import * as core from "./core.js";

test(
  "prints a schema with the default options",
  core.test(__filename, ["a", "b", "c"]),
);
