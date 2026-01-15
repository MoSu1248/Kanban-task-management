import { create } from "zustand";

export const useModalStore = create((set) => ({
  modalState: false,
  modalType: null,
  
  toggleModalOpen: (type, payload = null) =>
    set(() => ({ modalState: true, modalType: type, payload: payload })),
  toggleModalClose: () =>
    set(() => ({ modalState: false, modalType: null, payload: null })),
}));
