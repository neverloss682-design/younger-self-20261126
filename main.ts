// One Line to Your Younger Self — one-liner entry generator.
//
// Writes a single line to the writer's younger self: wear the good
// sneakers every day — the special occasion they are being saved for
// turns out to be their dad's funeral, and mud from the park would have
// been a better memory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a reversal — the "special occasion" the sneakers were saved
// for is not a celebration at all, and the everyday mud would have been
// the better memory. 174 characters, inside the 200 cap.
const ENTRY =
  "Kid, wear the good sneakers every day — the special occasion you're saving them for turns out to be your dad's funeral, and mud from the park would have been a better memory.";

// Output directory: MAKEFUN_OUTPUT_DIR when set, otherwise the grader's
// absolute default /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
