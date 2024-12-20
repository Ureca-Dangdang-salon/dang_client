import { create } from 'zustand';

const usePageStore = create((set) => ({
  newRequestStep: 1,
  setNewRequestStep: (page) => set({ newRequestStep: page }),
  dogStep: 0,
  setDogStep: (page) => set({ dogStep: page }),
  estimateStep: 1,
  setEstimateStep: (page) => set({ estimateStep: page }),
  estimateEditStep: 1,
  setEstimateEditStep: (page) => set({ estimateEditStep: page }),
}));

export default usePageStore;
