import ProductData from "../data/product-list-data.json";
import ProductCard from "../component/ProductCard";
import useProductStore from "../store/ProductStore";

const ProductList = () => {
  const { cart } = useProductStore();

  return (
    <div className="w-screen min-h-screen bg-[hsl(20,50%,98%)] text-[#212121] font-[Red_hat_text] flex justify-center items-center  ">
      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] w-full  max-w-6xl ">
        {/* Left container */}
        <div className="w-full p-8">
          <h1 className="text-3xl font-bold">Desserts</h1>
          {/* product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
            {ProductData.map((data, i) => (
              <ProductCard productData={data} currentId={i} key={i} />
            ))}
          </div>
        </div>
        {/* Right container */}
        <div className="w-full p-8">
          <div className="bg-white p-4 rounded-2xl">
            <h1 className="text-[hsl(14,86%,42%)] font-bold text-xl">
              Your cart (0)
            </h1>
            <div className="w-full flex flex-col justify-center items-center p-5">
              <img
                src="/Front-end-mentor-react/product-list/images/illustration-empty-cart.svg"
                alt=""
              />
              <p className="text-sm font-semibold text-[hsl(12,20%,44%)]">
                Your added items will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
