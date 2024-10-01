import { create } from "zustand";

const useStore = create((set) => ({
  selectedCategoryId: "",
  selectedColorId:"",
  selectedSizeId:"",
  selectedMaterialId:"",
  setSelectedCategoryId: (id) => set({ selectedCategoryId: id}),
  setSelectedColorId: (id) => set({ selectedColorId: id}),
  setSelectedSizeId: (id) => set({ selectedSizeId: id}),
  setSelectedMaterialId: (id) => set({ selectedMaterialId: id}),
  resetFilters: (id)=>set({selectedCategoryId:"", selectedColorId:"", selectedSizeId:"", selectedMaterialId:""})
}));
export default useStore;
