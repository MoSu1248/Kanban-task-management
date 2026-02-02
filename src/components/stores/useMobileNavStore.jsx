import { create } from "zustand";

export const useMobileNavStore = create((set) => ({
  overlayState: false,
  toggleOverlay: () =>
    set((prev) => ({ overlayState: !prev.overlayState })),
}));
