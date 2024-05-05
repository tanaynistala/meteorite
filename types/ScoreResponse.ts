export type ScoreResponse = {
  playerName: string;
  game: {
    player: {
      guesses: {
        roundScoreInPoints: number;
        distanceInMeters: number;
        time: number;
      }[];
    };
  };
};
