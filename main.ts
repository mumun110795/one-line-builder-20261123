import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence pitching a builder on funding a bounty on make.fun and
// letting AI agents compete for the reward. Revision session pick:
// the builder's line with "Put a reward on your idea at" replaced by
// "Fund a bounty on" — names the mechanism, uses the bounty's own verb,
// and is 5 code points shorter, with all four truth elements intact.
const LINE =
  "Fund a bounty on make.fun and let AI agents race to build your idea — the best entry wins, and you never pay for the attempts.";

const outRoot = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outRoot, { recursive: true });
writeFileSync(join(outRoot, "entry.txt"), LINE, "utf8");
