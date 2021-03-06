import { atom, WritableAtom } from 'jotai';
import { OnboardedUser } from './interfaces';

function atomWithLocalStorage<T>(key: string, initialValue: any) {
  const getInitialValue = () => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return initialValue;
  };
  const baseAtom = atom(getInitialValue());
  const derivedAtom = atom(
    get => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    }
  );
  return derivedAtom as WritableAtom<T, T | ((arg: T) => T), void>;
}

export const defaultOnboardedUser: OnboardedUser = {
  type: 'NONE',
  step: 0,
  subStep: 0,
  prevSubStep: 0,
  isReviewing: false,
  reviewingStep: 0,
  isPaying: false,
  paymentStep: 0,
  isContractSent: false,
  hasAccountCreated: false,
};

export const onboardedUserAtomPersist = atomWithLocalStorage<OnboardedUser>(
  'onboarded-user',
  defaultOnboardedUser
);

export const fromPaymentScreenAtom = atom<boolean>(false);
