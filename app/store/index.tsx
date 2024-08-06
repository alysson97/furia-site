import { create } from 'zustand';

interface CarouselState {
  currentImage: string | number | null;
  setCurrentImage: (image: string | number) => void;
}

const useStore = create<CarouselState>((set, get) => ({
  currentImage: 3,
  setCurrentImage: (image: string | number) => set({ currentImage: image }),
}));

export default useStore;