import { create } from "zustand";

export const useOptionsStore = create((set) => ({
  optionsState: false,
  openOptions: () => set({ optionsState: true }),
  closeOptions: () => set({ optionsState: false }),
  toggleOptions: () =>
    set((state) => ({
      optionsState: !state.optionsState,
    })),
}));
