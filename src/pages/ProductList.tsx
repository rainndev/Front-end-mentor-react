import ProductData from "../data/product-list-data.json";
import ProductCard from "../component/ProductCard";

const ProductList = () => {
  return (
    <div className="w-screen h-screen text-[#212121] font-[Red_hat_text] flex justify-center items-center  ">
      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] w-full  max-w-6xl ">
        {/* Left container */}
        <div className="bg-amber-300 w-full p-8">
          <h1 className="text-2xl font-bold">Desserts</h1>
          {/* product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
        {/* Right container */}
        <div className="bg-amber-500 w-full">right container</div>
      </div>
    </div>
  );
};

export default ProductList;
