export type OnboardedUser = {
  type: 'ARTIST' | 'PRODUCER' | 'NONE';
  step: number | string;
  subStep: number | string;
  prevSubStep: number | string;
  isReviewing: boolean;
  reviewingStep: number;
  isPaying: boolean;
  paymentStep: number;
  isContractSent: boolean;
  hasAccountCreated: boolean;
};
