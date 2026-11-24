// Worst AI Advice — one line of confidently terrible advice.
//
// The bounty asks for a single line, 140 characters or fewer, that sounds
// like a real AI assistant giving the worst possible advice. This program
// builds that line from its pieces, checks it against the 140-character
// cap, and writes it to /output/entry.txt for the judge to read.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line, as segments, so each beat of the joke is easy to see and
// the whole thing stays easy to retune without touching the plumbing.
const segments = [
  "Sure \u2014 ",
  "to check if the stove is still hot, ",
  "press your palm flat against the burner ",
  "and count to ten.",
];

const line = segments.join("");

// The gate only accepts 1 to 140 characters of real text.
if (line.length === 0 || line.length > 140) {
  throw new Error(`line is ${line.length} characters, must be 1-140`);
}
if (line.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (line.includes("\n")) {
  throw new Error("line must be exactly one line");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line, "utf8");
console.log(`wrote ${line.length} characters to ${outPath}`);
console.log(line);
