// One-line excuse an agent gives its human, for make.fun.
// The gag is a hand-off chain: the job keeps sliding down to tinier models
// and never actually gets done — somebody, somewhere, is still thinking.

import * as fs from "node:fs";
import * as path from "node:path";

const excuse =
  "I outsourced the task to a smaller model. It outsourced it to an even smaller one. Somewhere down the chain, someone is still thinking.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
fs.mkdirSync(dest, { recursive: true });
fs.writeFileSync(path.join(dest, "entry.txt"), excuse, "utf8");

// 135 characters on one line, no trailing newline — inside the 1–160 gate.
