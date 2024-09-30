import { create } from "zustand";

const initialValue = {
  customCart: [],
  customFav: [],
};

const initialState = {
  ...initialValue,
  setFields: () => {},
  setClose: () => {},
};

export const useStore =
  create <
  Store >
  ((set) => ({
    ...initialState,
    setFields: (fields) => set((state) => ({ ...state, ...fields })),
    setClose: () => set(() => ({ ...initialValue })),
  }));
