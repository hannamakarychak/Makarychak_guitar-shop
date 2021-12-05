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
      previousClassName="pagination__item"
      previousLinkClassName="pagination__link"
      nextClassName="pagination__item"
      nextLinkClassName="pagination__link"
      breakLabel="..."
      breakClassName="pagination__item"
      breakLinkClassName="pagination__link"
      containerClassName={classNames(className, 'pagination')}
      activeClassName="active"
      forcePage={currentPage} // current page number
      pageCount={pageCount} // total pages
      marginPagesDisplayed={1} // don't change
      pageRangeDisplayed={1} // don't change
      onPageChange={onPageChange} // don't change
      disableInitialCallback // don't change
    />
  );
};

export default Pagination;
