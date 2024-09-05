import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import ProductPage from './ProductPage';

const ProductPageWrapper = () => {
  const { productId } = useParams<{ productId: string }>();
  const productData = productDatabase[productId as keyof typeof productDatabase];

  if (!productData) {
    return <h2>Producto no encontrado</h2>;
  }

  return <ProductPage {...productData} />;
};

const productDatabase = {
  "estuche-950ml": {
    "name": "Estuche 950ml",
    "material": "Bagazo de caña de azucar",
    "slots": "2 compartimentos",
    "size": "24cmx15cmx8cm.",
    "customizableText": "Envase customizable.",
    "biodegradableText": "En 60 días se biodegrada por completo.",
    "shippingText": "Envíos a todo el país",
    "imagePath":"/estuche-950ml.png"
  },
  "estuche-1500ml": {
    "name": "Estuche 1500ml",
    "material": "Bagazo de caña de azucar",
    "slots": "3 compartimentos",
    "size": "23cm x 23cm x 7,5cm",
    "customizableText": "Envase customizable.",
    "biodegradableText": "En 60 días se biodegrada por completo.",
    "shippingText": "Envíos a todo el país",
    "imagePath":"/estuche-1500ml.png"
  },
  "bowl-1500ml": {
    "name": "Bowl 950ml",
    "material": "Bagazo de caña de azucar",
    "slots": "Incluye tapa biodegradable",
    "size": "18cm x 13,5cm x 8cm (alto)",
    "customizableText": "Envase customizable.",
    "biodegradableText": "En 60 días se biodegrada por completo.",
    "shippingText": "Envíos a todo el país",
    "imagePath":"/bowl-950ml.png"
  },
  "bowl-redondo-500ml": {
    "name": "Bowl redondo 500ml",
    "material": "Bagazo de caña de azucar",
    "slots": "Incluye tapa biodegradable",
    "size": "14cm x 9cm x 5cm (alto)",
    "customizableText": "Envase customizable.",
    "biodegradableText": "En 60 días se biodegrada por completo.",
    "shippingText": "Envíos a todo el país",
    "imagePath":"/estuche-950ml.png"
  }
}

export default ProductPageWrapper