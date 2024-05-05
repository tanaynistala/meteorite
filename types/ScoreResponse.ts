export type ScoreResponse = {
  playerName: string;
  userId: string;
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
