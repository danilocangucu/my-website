export type SnowFlakeWeight = "heavy" | "medium" | "light";

export interface SnowFlake {
  name: SnowFlakeWeight;
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

// TODO organise the types in folders and files

export interface ApplicationDetailsDTO {
  application: {
    personalInformation: {
      fullName: string;
      emailAddress: string;
      phoneNumber: string;
      preferredLanguage: string;
    };
    aboutYourWebsite: {
      websiteDescription: string;
      websiteFeatures: string[];
    };
    isComplete: boolean;
  };
}
