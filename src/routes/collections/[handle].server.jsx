import { useShopQuery, gql } from '@shopify/hydrogen';
import Layout from '../../components/Layout.server';
import CollectionDetails from '../../components/CollectionDetails';

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
      <CollectionDetails collection={data.collection} />
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
