import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  setPage,
  totalPages,
  page,
}) => {
  return (
    <div>
      <button className={css.loadMoreBtn} onClick={() => setPage(page + 1)}>
        Load more
      </button>
      <span className={css.spanEffect}>Page: {page}</span>
      <span className={css.spanEffect}>Total Page: {totalPages}</span>
    </div>
  );
};

export default LoadMoreBtn;
