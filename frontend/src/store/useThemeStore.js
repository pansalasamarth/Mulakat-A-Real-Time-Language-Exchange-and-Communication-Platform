import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("mulakat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("mulakat-theme", theme);
    set({ theme });
  },
}));