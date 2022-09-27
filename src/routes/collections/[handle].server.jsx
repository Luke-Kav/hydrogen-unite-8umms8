import { useShopQuery, gql } from '@shopify/hydrogen';
import Layout from '../../components/Layout.server';
export default function Collections({ params }) {
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
      <h1>Welcome to collections page: {data.collection.title}</h1>
    </Layout>
  );
}
const QUERY = gql`
  query Collection($handle: String!) {
    collection(handle: $handle) {
      id
      handle
      description
      title
      products(first: 24) {
        nodes {
          id
          title
          description
        }
      }
    }
  }
`;
