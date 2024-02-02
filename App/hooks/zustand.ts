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

interface IDentist {
  Dentist: boolean;
  setDentist: (setToDentist: boolean) => void;
}

export const useDentist = create<IDentist>((set) => ({
  Dentist: true,
  setDentist: (setToDentist: boolean) => set({ Dentist: setToDentist }),
}));

export interface ISchedule {
  Schedule: string;
  setSchedule: (setScheduleDate: string) => void;
}

export const useSchedule = create<ISchedule>((set) => ({
  Schedule: "",
  setSchedule: (setScheduleDate: string) => set({ Schedule: setScheduleDate }),
}));
interface IPanduanPage {
  activePage: string;
  setActivePage: (setActive: string) => void;
}

export const usePanduanPage = create<IPanduanPage>((set) => ({
  activePage: "PanduanOne",
  setActivePage: (setActive: string) => set({ activePage: setActive }),
}));
