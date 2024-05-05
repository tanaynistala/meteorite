export type Score = {
  player: string;
  rounds: {
    score: number;
    distance: number;
    time: number;
  }[];
};
