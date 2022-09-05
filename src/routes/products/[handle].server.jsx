// /src/routes/products/example.server.jsx

import { useShopQuery, gql } from '@shopify/hydrogen';
import Layout from '../../components/Layout.server';
import ProductDetails from '../../components/ProductDetails.client';

export default function Example({ params }) {
  const { handle } = params;
  const { data } = useShopQuery({
    query: QUERY,
    variables: {
      handle,
    },
  });
  console.log(data);

  return (
    <Layout>
      <ProductDetails product={data.product} />
    </Layout>
  );
}

const QUERY = gql`
 query productQuery($handle: String!) {
   product(handle: $handle) {
     id
     title
   }
 }
 `;
