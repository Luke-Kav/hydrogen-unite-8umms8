// /src/routes/products/example.server.jsx

import Layout from '../../components/Layout.server';

export default function Example({ params }) {
  const { handle } = params;
  return (
    <Layout>
      <p>Hello World! This is the product page for {handle}</p>
    </Layout>
  );
}
