import { create } from "zustand"

interface IUiState {
  paletteOpen: boolean
  setPaletteOpen: (open: boolean) => void
}

export const useUiStore = create<IUiState>((set) => ({
  paletteOpen: false,
  setPaletteOpen: (paletteOpen) => set({ paletteOpen }),
}))
