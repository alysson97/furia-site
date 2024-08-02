//import { StaticImageData } from 'next/image';
import { create } from 'zustand';

interface CarouselState {
  currentImage: string | null;
  setCurrentImage: (image: string) => void;
}

const useStore = create<CarouselState>((set) => ({
  currentImage: null,
  setCurrentImage: (image: string) => set({ currentImage: image }),
}));

export default useStore;