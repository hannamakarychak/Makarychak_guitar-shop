import ReactPaginate from 'react-paginate';

const Pagination = ({ currentPage, pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
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
