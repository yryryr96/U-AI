import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FireState {
  state: number;
  setState: (value: number) => void;
}

const useFireState = create<FireState>()(
  persist((set) => ({
    state: 0,
    setState: (value) => set({ state: value }),
  }), {
    name: 'fireState', // 스토어 이름
  })
);

export default useFireState;