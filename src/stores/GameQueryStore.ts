import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  order?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  onSearchText: (searchText: string) => void;
  onSelectGenreId: (genreId: number) => void;
  onSelectPlatformId: (platformId: number) => void;
  onSelectSortOrder: (order: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  onSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
  onSelectGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  onSelectPlatformId: (platformId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  onSelectSortOrder: (order: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, order } })),
}));

export default useGameQueryStore;
