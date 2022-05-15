export interface PageSelectorProps {
  currentPage: number;
  lastPage: number;
  goToPage: (page: number) => void;
}
