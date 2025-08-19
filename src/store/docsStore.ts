/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
// store/useStore.ts
interface IMyDocs {
  product_id: number;
  product_name: string;
  slug: string;
}
interface DocsStore {
  docs: any[];
  activeDoc: any;
  setDocs: (docs: any[]) => void;
  setActiveDoc: (activeDoc: any) => void;
  myDocs: IMyDocs[];
  setMyDocs: (docs: IMyDocs[]) => void;
}

export const useDocsStore = create<DocsStore>((set) => ({
  docs: [],
  myDocs: [],
  activeDoc: {},
  setDocs: (docs) => set({ docs }),
  setActiveDoc: (activeDoc) => set({ activeDoc }),
  setMyDocs: (myDocs) => set({ myDocs }),
}));
