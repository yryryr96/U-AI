import { create } from "zustand";

export interface ImageUrlType {
  imageUrls: string[];
  updateImageUrl: (url: string, action: 'add' | 'update', index: number) => void;
  resetImageUrls: () => void;
}

const useImageUrlState = create<ImageUrlType>((set) => ({
  imageUrls: [],
  updateImageUrl: (url, action, index) => set((state) => {
    let newImageUrls = [...state.imageUrls]
    if (action === 'add') {
      // add면 url 추가
      newImageUrls.push(url);
    } else if (action === 'update' && newImageUrls.length > 0) {
      // update면 해당 index번째 url 변경
      newImageUrls[index] = url
    }
    return { imageUrls: newImageUrls }
  }),
  resetImageUrls: () => set({ imageUrls: [] })
}));

export default useImageUrlState;