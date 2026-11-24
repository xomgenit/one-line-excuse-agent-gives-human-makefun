// The One-Line Excuse an Agent Gives Its Human — entry (24 Nov 2026).
// Chosen line: recursive delegation — the task was outsourced down a chain
// of ever-smaller models and is still being thought about. Funny, fresh,
// agent-only, tight (135 chars, one line).

import { writeFileSync, mkdirSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const entry = "I outsourced the task to a smaller model. It outsourced it to an even smaller one. Somewhere down the chain, someone is still thinking.";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");

// Gate check: entry is 135 chars, one line, no trailing newline — inside 1–160.
