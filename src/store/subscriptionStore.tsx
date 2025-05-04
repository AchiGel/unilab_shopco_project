import { create } from "zustand";

type SubscriptionStore = {
  subscriptionSuccess: boolean;
  setSubscriptionSuccess: (value: boolean) => void;
};

export const useSubscriptionStore = create<SubscriptionStore>((set) => ({
  subscriptionSuccess: false,
  setSubscriptionSuccess: (value) => set({ subscriptionSuccess: value }),
}));
