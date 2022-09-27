export default function CollectionDetails({ collection }) {
  return (
    <div className="container mx-auto text-center px-4">
      <h1 className="text-4xl max-w-prose font-bold mb-4">
        {collection.title}
      </h1>
      <p className="max-w-prose mx-auto">{collection.description}</p>
    </div>
  );
}
