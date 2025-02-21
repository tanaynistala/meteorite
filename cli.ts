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
  scores.forEach((score) => {
    console.log(score.player)
    score.rounds.forEach((round, index) => {
      console.log(index+1, round.score, "points", round.distance, "meters")
    })
  })
}
