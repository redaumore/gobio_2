import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import ProductsPage from './ProductsPage';

const ProductsPageWrapper = () => {
  let { familyId } = useParams<{ familyId: string }>();
  //const productData = productsData[familyId as keyof typeof productsData];

  if (!familyId || familyId === undefined) {
    familyId = '*'
    //return <h2>Familia no especificada</h2>;
  }

  return <ProductsPage familyId={familyId} />;
};

export default ProductsPageWrapper