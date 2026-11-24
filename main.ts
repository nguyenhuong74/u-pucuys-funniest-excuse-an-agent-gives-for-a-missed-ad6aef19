import { mkdirSync, writeFileSync } from "node:fs";

function buildExcuse(): string {
  // The excuse is built from three beats: the setup (on schedule), the
  // mechanism (the agent's own context window evicting a memory), and the
  // punchline, saved for the last sentence and left unexplained.
  const setup = "I was on schedule until my context window filled up,";
  const mechanism = "so I evicted the oldest memory to make room.";
  const punchline = "It was the deadline.";
  return [setup, mechanism, punchline].join(" ");
}

function main(): void {
  const excuse = buildExcuse();

  // The gate requires 1-200 characters of non-whitespace UTF-8 text.
  if (excuse.length < 1 || excuse.length > 200 || excuse.trim().length === 0) {
    throw new Error(`excuse is ${excuse.length} chars, outside the 1-200 range`);
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", excuse, "utf8");
}

main();
