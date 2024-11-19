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
    aboutYou: {
      work: string;
      projectContext: string;
    };
    aboutYourWebsite: {
      websiteReason: string;
      websiteMainDescription: string;
      websiteMainFeature: string;
      websiteAdditionalFeatures: {
        feature1: string;
        feature2: string;
        feature3: string;
      };
      websiteContentMaterial: string;
    };
    linksAndReferences: {
      currentPresence: {
        link1: string;
        link2: string;
        link3: string;
      };
      referenceWebsites: {
        link1: string;
        link2: string;
        link3: string;
      };
    };
    finalThoughts: string;
    isComplete: boolean;
  };
}