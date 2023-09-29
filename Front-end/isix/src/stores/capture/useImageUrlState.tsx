import { create } from "zustand";

export interface ImageUrlType {
  imageUrls: string[];
  updateImageUrl: (url: string, action: 'add' | 'update') => void;
  resetImageUrls: () => void;
}

const useImageUrlState = create<ImageUrlType>((set) => ({
  imageUrls: [],
  updateImageUrl: (url, action) => set((state) => {
    let newImageUrls = [...state.imageUrls]
    if (action === 'add') {
      newImageUrls.push(url);
    } else if (action === 'update' && newImageUrls.length > 0) {
      newImageUrls[newImageUrls.length - 1] = url
    }
    return { imageUrls: newImageUrls }
  }),
  resetImageUrls: () => set({ imageUrls: [] })
}));

export default useImageUrlState;