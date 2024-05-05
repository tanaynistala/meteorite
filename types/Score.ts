export type Score = {
  player: string;
  playerId: string;
  rounds: {
    score: number;
    distance: number;
    time: number;
  }[];
};
