import { mkdirSync, writeFileSync } from "node:fs";

// One-star review from the house cat: the human feeds on time, then vanishes.
const line = "One star. He fills the bowl at dawn, then leaves for ten hours and expects me to guard an empty house for free.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
