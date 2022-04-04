export type OnboardedUser = {
  type: 'ARTIST' | 'PRODUCER' | 'NONE';
  step: number | string;
  subStep: number | string;
  prevSubStep: number | string;
  paths: string[];
};
