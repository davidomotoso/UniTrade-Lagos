const Specifications = ({
  product,
}: {
  product: {
    features: string[];
    specifications: { label: string; value: string }[];
  };
}) => {
  return (
    <section className="bg-white rounded-sm my-4 text-neutral-dark">
      <h3 className="text-xl font-medium p-3 border-b border-gray-200">
        Specification
      </h3>
      <section className="flex items-stretch justify-between p-4 text-sm">
        <div className="w-19/39 rounded-sm border border-gray-300">
          <h5 className="font-medium p-3 border-b border-gray-200 uppercase">
            Features
          </h5>
          <ul className="list-disc space-y-2 pl-7 pr-3 py-4">
            {product.features.map((feature, index) => (
              <li key={index} className="text-base">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-19/39 rounded-sm border border-gray-300">
          <h5 className=" text-sm font-medium p-3 border-b border-gray-200 uppercase">
            Specifications
          </h5>
          <ul className="space-y-2 p-3">
            {product.specifications.map((specification, index) => (
              <li key={index} className="text-base">
                <strong>{specification.label}:</strong> {specification.value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Specifications;
