import * as core from "./core.js";

test(
  "omit read on column",
  core.test(
    __filename,
    ["d"],
    {},
    `
comment on column d.tv_shows.title is E'@omit read,create,update,delete,all,many';
`,
  ),
);
