import { introProducts } from "@/components/Exports";

const Preference = ({ seller }: { seller: { id: number } }) => {
  const filteredProducts = introProducts.filter((product) => product.id === seller.id);
  const uniqueCategories = [...new Set(filteredProducts.map((product) => product.category))];
  const specifications = filteredProducts.map((product) =>product.specifications).flat();
  const filteredBrands= specifications.filter(spec=>spec.label=="Brand")
  const uniqueBrands= [...new Set(filteredBrands.map((brand)=> brand.value))]
  
  return (
    <aside className="bg-white w-3/12 rounded-sm">
      {/* Category Section */}
      <div className="p-3 border-b border-gray-200 space-y-2">
        <h5 className="font-medium uppercase">Category</h5>
        <ul className="space-y-2">
          {uniqueCategories.map((category, index) => (
            <li key={index} className="px-3">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Brand Section */}
      <div className="p-3 border-b border-gray-200 space-y-2">
        <h5 className="font-medium uppercase">Brand</h5>
        <ul className="space-y-2 h-36 overflow-y-auto py-2">
          {uniqueBrands.map((brand, index) => (
            <li key={index} className="px-3 flex items-center gap-x-2 group cursor-pointer">
              <input
                className="group-hover:before:bg-primary/30 before:duration-200 before:-left-2 before:-top-2 before:rounded-full before:absolute before:w-7 before:h-7 relative accent-primary"
                title="brand"
                type="radio"
                name="brand"
                id={`brand-${index}`}
              />
              <label htmlFor={`brand-${index}`}>{brand}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Section (Static for now) */}
      <div className="p-3 space-y-6">
        <div className="flex justify-between items-center">
          <h5 className="font-semibold text-gray-700">PRICE (₦)</h5>
          <button
            title="apply"
            type="submit"
            className="px-3 py-2 cursor-pointer hover:bg-primary/30 text-primary text-sm font-medium rounded-sm"
          >
            Apply
          </button>
        </div>
        <div className="relative">
          <div className="relative w-full h-[5px] bg-gray-300 rounded-full">
            <div className="absolute h-full bg-primary rounded-full left-1/10 w-7/10" />
            <div className="absolute -top-[6px] w-4 h-4 bg-primary rounded-full left-1/10 -translate-x-1/2" />
            <div className="absolute -top-[6px] w-4 h-4 bg-primary rounded-full left-8/10 -translate-x-1/2" />
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <input
            type="number"
            value={2000}
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent text-sm"
            placeholder="Min"
            min="0"
            aria-label="Minimum price input"
            readOnly
          />
          <span className="text-lg font-medium">-</span>
          <input
            type="number"
            value={7000}
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent text-sm"
            placeholder="Max"
            min="0"
            aria-label="Maximum price input"
            readOnly
          />
        </div>
      </div>
    </aside>
  );
};

export default Preference;