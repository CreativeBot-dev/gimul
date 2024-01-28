import { create } from "zustand";

interface IUser {
  user: string;
  setUser: (setName: string) => void;
}

export const useUser = create<IUser>((set) => ({
  user: "",
  setUser: (setName: string) => set({ user: setName }),
}));

interface ISikatGigi {
  sikatGigi: number;
  setSikatGigi: (setDataSikat: number) => void;
}

export const useReminderSikat = create<ISikatGigi>((set) => ({
  sikatGigi: 0,
  setSikatGigi: (setDataSikat: number) => set({ sikatGigi: setDataSikat }),
}));
