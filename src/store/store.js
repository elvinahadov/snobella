import { create } from "zustand";

const useStore = create((set) => ({
  selectedCategoryId: "",
  setSelectedCategoryId: (id) => set({ selectedCategoryId: id}),
}));
export default useStore;
