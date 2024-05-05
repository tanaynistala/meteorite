import { type Score } from "./types/Score";
import { type ScoreResponse } from "./types/ScoreResponse";

export async function fetchScores(seed: string): Promise<Score[]> {
  const scores: ScoreResponse[] = [];
  let nextPage: string = "";

  while (true) {
    // GET request for scores
    // Defaults to top 25 scores, with pagination token if there are more
    const response = await fetch(
      "https://geoguessr.com/api/v3/results/highscores" +
        new URLSearchParams({
          friends: "false",
          minRounds: "5",
          paginationToken: nextPage,
        }),
      { headers: new Headers({ _ncfa: "" }) }
    );

    if (response.status !== 200) {
      console.error("Failed to fetch scores for seed", seed);
    }

    // Parse response JSON
    const json: { items: ScoreResponse[]; paginationToken: string } =
      await response.json();

    // Add scores to array
    scores.push(...json.items);

    // Update the token for the next page
    nextPage = json.paginationToken;

    // Break if no more scores are left
    if (nextPage === null) break;
  }

  // Reformat scores and return
  return scores.map((data: ScoreResponse) => {
    let guesses = data.game.player.guesses;
    return {
      player: data.playerName,
      rounds: guesses.map((guess) => {
        return {
          score: guess.roundScoreInPoints,
          distance: guess.distanceInMeters,
          time: guess.time,
        };
      }),
    };
  });
}
