/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
// store/useStore.ts
interface IMyDocs {
  products_id: number;
  products_name: string;
}
interface DocsStore {
  docs: any[];
  activeDoc: any;
  setDocs: (docs: any[]) => void;
  seActiveDoc: (activeDoc: any) => void;
  myDocs: IMyDocs[];
  setMyDocs: (docs: IMyDocs[]) => void;
}

export const useDocsStore = create<DocsStore>((set) => ({
  docs: [],
  myDocs: [],
  activeDoc: {},
  setDocs: (docs) => set({ docs }),
  seActiveDoc: (activeDoc) => set({ activeDoc }),
  setMyDocs: (myDocs) => set({ myDocs }),
}));
