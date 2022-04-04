export type OnboardedUser = {
  type: 'ARTIST' | 'PRODUCER' | 'NONE';
  step: number | string;
  subStep: number | string;
  prevStep: number | string;
  prevSubStep: number | string;
};
