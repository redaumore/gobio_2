import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import ProductPage from './ProductPage';
import productsData from '../data/products.json'

// Creamos un tipo a partir de las claves de productsData
type ProductId = keyof typeof productsData;

const ProductPageWrapper = () => {
  const { productId } = useParams<{ productId: string }>();

  // Verificamos si productId es una de las claves válidas del objeto productsData
  function isValidProductId(id: string): id is ProductId {
    return id in productsData;
  }

  // Condicional para asegurar que el productId es válido
  if (!productId || !isValidProductId(productId)) {
    return <h2>Producto no encontrado</h2>;
  }

  // Safely access the productData
  const productData = productsData[productId];

  return <ProductPage {...productData} />;
};

export default ProductPageWrapper