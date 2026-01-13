import { create } from "zustand";

type CategoryState = {
  nowCategory: string;
  setNowCategory: (value: string) => void;
};

export const useCategoryStore = create<CategoryState>((set) => ({
  nowCategory: "추천",
  setNowCategory: (value) => set({ nowCategory: value }),
}));
