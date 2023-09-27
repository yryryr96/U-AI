import { create } from "zustand";

export interface ImageUrlType {
  imageUrls: string[];
  addImageUrl: (url: string) => void;
  resetImageUrls: () => void;
}

const useImageUrlState = create<ImageUrlType>((set) => ({
  imageUrls: [],
  addImageUrl: (url) => set((state) => ({ imageUrls: [...state.imageUrls, url] })),
  resetImageUrls: () => set({ imageUrls: [] })
}));

export default useImageUrlState;