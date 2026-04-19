import { create } from 'zustand';

interface FilterState {
  location: string;
  form: string;
  transmission: string;
  engine: string;
  // setFilters: (filters: Partial<FilterState>) => void;
  setFilters: (
    filters: Partial<Omit<FilterState, 'setFilters' | 'resetFilters'>>,
  ) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>(set => ({
  location: '',
  form: '',
  transmission: '',
  engine: '',
  setFilters: newFilters => set(newFilters),
  // setFilters: newFilters => set(state => ({ ...state, ...newFilters })),
  resetFilters: () =>
    set({ location: '', form: '', transmission: '', engine: '' }),
}));
// useFilterStore.subscribe(newState => {
//   console.log('📦 Состояние стора изменилось:', newState);
// });
