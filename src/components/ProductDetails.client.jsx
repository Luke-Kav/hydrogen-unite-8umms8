// /src/components/ProductDetails.client.jsx
import { ProductOptionsProvider, MediaFile } from '@shopify/hydrogen';

export default function ProductDetails({ product }) {
  const { title, vendor, media, descriptionHtml } = product;
  return (
    <ProductOptionsProvider data={product}>
      <div>{title}</div>
      <MediaFile data={media.nodes[0]} />
    </ProductOptionsProvider>
  );
}
