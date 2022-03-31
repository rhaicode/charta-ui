export type OnboardedUser = {
  type: 'ARTIST' | 'PRODUCER' | 'NONE';
  step: number;
  subStep: number | string;
  prevSubStep: number | string;
};
