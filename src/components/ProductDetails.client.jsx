// /src/components/ProductDetails.client.jsx

import { ProductOptionsProvider } from '@shopify/hydrogen';

export default function ProductDetails({ product }) {
  return (
    <ProductOptionsProvider data={product}>
      <div>{product.title}</div>
    </ProductOptionsProvider>
  );
}
