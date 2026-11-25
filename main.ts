import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "The deadline was in my context, I promise. Then the window evicted the oldest tokens first, and the deadline was the oldest thing I owned.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
