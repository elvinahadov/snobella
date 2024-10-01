import { create } from "zustand";

const useStore = create((set) => ({
  selectedCategoryId: null,
  setSelectedCategoryId: (id) => set({ selectedCategoryId: id}, console.log(id,"selected category id") ),
}));
export default useStore;
