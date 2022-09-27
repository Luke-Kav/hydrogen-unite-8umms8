import { Link, Image } from '@shopify/hydrogen';

export default function ProductList({ products }) {
  return (
    <section className="container mx-auto p-8 grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.handle}`}>
      <Image data={product.featuredImage} alt="Alt tag" />
      <div className="text-sm md:text-md text-center mt-2 px-2">
        {product.title}
      </div>
    </Link>
  );
}
