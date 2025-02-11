/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
// store/useStore.ts

interface DocsStore {
  docs: any[];
  setDocs: (docs: any[]) => void;
}

export const useDocsStore = create<DocsStore>((set) => ({
  docs: [],
  setDocs: (docs) => set({ docs }),
}));
