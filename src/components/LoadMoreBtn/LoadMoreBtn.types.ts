export interface LoadMoreBtnProps {
  setPage: (page: number) => void;
  totalPages: number;
  page: number;
}
