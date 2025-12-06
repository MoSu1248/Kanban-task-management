import { create } from "zustand";

export const userBoardStore = create((set) => ({
  selectedBoardId: 0,
  setSelectedBoardId: (id) => set({ selectedBoardId: id }),
}));
