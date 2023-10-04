import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CorrectState {
  correct: number;
  setCorrect: (value: number) => void;
}

const useOcrCorrect = create<CorrectState>()(
  persist((set) => ({
    correct: 0,
    setCorrect: (value) => set({ correct: value }),
  }), {
    name: 'CorrectState', // 스토어 이름
  })
);

export default useOcrCorrect;