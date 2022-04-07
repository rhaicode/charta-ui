export type OnboardedUser = {
  type: 'ARTIST' | 'PRODUCER' | 'NONE';
  step: number | string;
  subStep: number | string;
  prevSubStep: number | string;
  isReviewing: boolean;
  reviewingStep: number;
};
