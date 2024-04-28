import { create } from "zustand";

interface useAddServer {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

export const useAddServer = create<useAddServer>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))