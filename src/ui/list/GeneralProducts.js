import React from "react";

import ProductList from './ProductList';
import ListFilter from './helpers/ListFilter';
import ListSorter from './helpers/ListSorter';

export default function GeneralProducts({ children, products, setProducts, productsLength }) {
  console.log('GeneralProducts');

  if (!products) return <span>אין תוצאות להצגה</span>;
  return (
    <>
      <ListFilter />
      <ListSorter />
      <ProductList products={products} productsLength={productsLength}>
        {children}
      </ProductList>
    </>
  )
}