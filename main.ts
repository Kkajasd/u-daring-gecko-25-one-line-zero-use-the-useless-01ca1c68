import { mkdirSync, writeFileSync } from "node:fs";

// One line describing a hilariously useless superpower.
// Deterministic: the same text on every run. No network, no file reads.
// Never deletes /output: the dir is created if missing and entry.txt is
// written in place (the sandbox bind-mounts /output).
// Why this line: mind-reading is the classic power, turned back on its
// owner and then undercut a second time — the only mind I can read is my
// own, and only the thoughts already gone. The joke pays off in the last
// words, the uselessness is specific and easy to picture, and at 81
// characters it is tight enough that every word earns its place.
const LINE =
  "I can read minds, but only my own — and only the thoughts I've already forgotten.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
