import { create } from "zustand";

export const useOverlayOptionsStore = create((set) => ({
  overlayOptionsState: false,
  openOptions: () => set({ overlayOptionsState: true }),
  closeOptions: () => set({ overlayOptionsState: false }),
  toggleOptions: () =>
    set((state) => ({
      overlayOptionsState: !state.overlayOptionsState,
    })),
}));
