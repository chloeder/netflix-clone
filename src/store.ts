import { create } from "zustand";

interface ToogleState {
  isToogle: boolean;
  updateToogle: () => void;
}

export const useStyleStore = create<ToogleState>((set) => ({
  isToogle: false,
  updateToogle: () => set((state) => ({ isToogle: !state.isToogle })),
}));
