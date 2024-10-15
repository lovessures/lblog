import { Web } from '@/types/app/project';
import { create } from 'zustand';

interface WebStore {
    web: Web,
    setWeb: (data: Web) => void,
}

export default create<WebStore>((set) => ({
    web: {} as Web,
    setWeb: (data: Web) => set(() => ({ web: data })),
})
);
