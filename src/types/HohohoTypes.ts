export type SnowFlakeWeight = "heavy" | "medium" | "light";

export interface SnowFlake {
  name: SnowFlakeWeight;
  size: number;
  url: string;
}

export interface SnowflakeAmount {
  heavy: number;
  medium: number;
  light: number;
}

export interface SnowFlakeProps {
  snowFlake: SnowFlake;
  amount: number;
  url: string;
}
