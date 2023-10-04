import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserInfoType {
  kindergarten: string;
  people: number;
  setKindergarten: (value: string) => void;
  setPeople: (value: number) => void;
}

const useUserInfoStore = create<UserInfoType>()(
  persist((set) => ({
    kindergarten: '',
    people: 3, // 일단 사람 초기값 3으로 설정
    setKindergarten: (value) => set({ kindergarten: value }),
    setPeople: (value) => set({ people: value }),
  }), {
    name: 'userInfo', // 스토어 이름
  })
);

export default useUserInfoStore;