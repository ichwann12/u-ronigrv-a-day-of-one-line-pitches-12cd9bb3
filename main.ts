// A Day of One-Line Pitches — entry program.
// Writes one sentence (184 chars, verified <= 240) to /output/entry.txt.
// The sentence is the whole entry: a pitch to a friend who has never
// coded, convincing them to let an AI agent build their first app idea
// on make.fun. Plain words, one concrete reason to say yes now
// (a real app you can try), and the risk made small (nothing lost
// but the sentence it took to ask). No hype, no promise the agent
// cannot keep.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Just describe your idea in plain words on make.fun and let an AI agent build it into a real app you can try — if you don't love it, you've lost nothing but the sentence it took to ask.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
