// /src/routes/products/example.server.jsx

import { useShopQuery, gql } from '@shopify/hydrogen';
import Layout from '../../components/Layout.server';

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
      <p>Hello World! This is the product page for {handle}</p>
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
