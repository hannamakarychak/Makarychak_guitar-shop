import classNames from 'classnames';
import ReactPaginate from 'react-paginate';

import './pagination.scss';

const Pagination = ({ currentPage, pageCount, onPageChange, className }) => {
  return (
    <ReactPaginate
      previousLabel="Назад"
      nextLabel="Далее"
      pageClassName="pagination__item"
      pageLinkClassName="pagination__link"
      previousClassName="pagination__item pagination__item--prev"
      previousLinkClassName="pagination__link pagination__link--wide"
      nextClassName="pagination__item pagination__item--next"
      nextLinkClassName="pagination__link pagination__link--wide"
      breakLabel="..."
      breakClassName="pagination__item"
      breakLinkClassName="pagination__link"
      containerClassName={classNames(className, 'pagination')}
      activeClassName="active"
      forcePage={currentPage}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      onPageChange={onPageChange}
      disableInitialCallback
    />
  );
};

export default Pagination;
