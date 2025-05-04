import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type RegisterStore = {
  users: User[];
  addUser: (user: User) => void;
};

export const useRegisterStore = create<RegisterStore>()(
  persist(
    (set) => ({
      users: [],
      addUser: (user) =>
        set((state) => ({
          users: [...state.users, user],
        })),
    }),
    {
      name: "registered-users",
    }
  )
);
