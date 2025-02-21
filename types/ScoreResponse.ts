export type ScoreResponse = {
  game: {
    player: {
      id: string;
      nick: string;
      guesses: {
        roundScoreInPoints: number;
        distanceInMeters: number;
        time: number;
      }[];
    };
  };
};
