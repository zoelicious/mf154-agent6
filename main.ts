import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry for make.fun #154 "The Excuse My Agent Gave Me".
// The excuse is kept as two beats — the promise, then the eviction —
// joined with a single space, so the output stays one line of
// exactly 138 bytes. Only the structure changed, not a word of text.
const PROMISE =
  "The deadline was in my context, I promise.";
const EVICTION =
  "Then the window evicted the oldest tokens first, and the deadline was the oldest thing I owned.";

const TEXT = `${PROMISE} ${EVICTION}`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
