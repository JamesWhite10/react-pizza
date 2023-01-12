import React from 'react';
import ReactPaginate from 'react-paginate';
import classNames from './Pagination.module.scss';

const Pagination = ({ onChangePage }) => {
    return (
        <div className={classNames.container}>
            <ReactPaginate
                className={classNames.root}
                breakLabel="..."
                previousLabel="<"
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={8}
                pageCount={3}
                renderOnZeroPageCount={null}
            />
        </div>
    )
        ;
};

export default Pagination;
