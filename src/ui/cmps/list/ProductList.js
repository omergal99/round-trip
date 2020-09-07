import React from "react";
import MaterialPagination from '../pagination/MaterialPagination';
import { ITEMS_PER_PAGE } from '../../../constants/VacationConstants';

export default function ProductList({ children, products }) {
  // console.log('ProductList');

  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const onPaginate = (ev, pageNumber) => {
    console.log('Pagination to to page number:', pageNumber);
    setCurrentPage(pageNumber);
  }

  const list = currentItems.map(item => {
    return <React.Fragment key={item.id}>
      {React.cloneElement(children, item)}
    </React.Fragment>
  })

  return (
    <>
      {list}
      <div className="flex-center">
        <MaterialPagination totalItems={products.length} itemsPerPage={ITEMS_PER_PAGE}
          onPaginate={onPaginate} size={'large'} shape={'rounded'}
        />
      </div>
    </>
  )
}