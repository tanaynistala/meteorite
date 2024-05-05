import { parseArgs } from "util";
import { fetchScores } from "./fetchScores";

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    seed: {
      type: "string",
    },
  },
  strict: true,
  allowPositionals: true,
});

if (values.seed) {
  const scores = await fetchScores(values.seed);
  console.log(scores);
}
