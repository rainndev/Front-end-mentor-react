import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useProductStore from "../store/ProductStore";

export interface ProductProps {
  productData: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
    quantity: number;
    id: number;
  };

  currentId: number;

  // other props
}

const ProductCard = ({ productData, currentId }: ProductProps) => {
  const { addToCart, getQuantity, decreaseItem } = useProductStore();
  const handleAddToCart = () => {
    addToCart(productData);
  };

  const handleRemoveCart = () => {
    decreaseItem(currentId);
  };

  return (
    <div className="w-full h-fit  rounded-lg">
      {/* Product image */}
      <div className="relative">
        <img
          src={productData.image.desktop}
          className={`w-full h-full bg-cover rounded-lg ${
            getQuantity(currentId) > 0 && "border-2 border-[hsl(14,86%,42%)]"
          }`}
          alt=""
        />
        <div className=" w-full flex justify-center absolute -bottom-5 left-0 ">
          <AnimatePresence>
            {/* Add items - add to cart */}
            {getQuantity(currentId) === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleAddToCart} // <-- Only show this when quantity is 0
                className="relative bg-white py-2 px-5 rounded-full w-fit flex font-medium border border-[hsl(7,20%,60%)] hover:border-[hsl(14,86%,42%)] group"
              >
                <img
                  src="/Front-end-mentor-react/product-list/images/icon-add-to-cart.svg"
                  className="mr-2 w-4"
                  alt=""
                />
                <motion.p
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -5, opacity: 0 }}
                  className="text-xs text-[hsl(14,65%,9%)] font-semibold align-middle  cursor-pointer group-hover:text-[hsl(14,86%,42%)] "
                >
                  Add to cart
                </motion.p>
              </motion.div>
            )}

            {/* Quantity UI (only shows when quantity > 0) */}
            {getQuantity(currentId) > 0 && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 150 }}
                exit={{ opacity: 0, width: 0 }}
                className="py-2 px-5 top-0 left-0 space-x-7 h-full bg-[hsl(14,86%,42%)] flex justify-between items-center rounded-full font-medium"
              >
                {/* Decrement quantity */}
                <div
                  onClick={handleRemoveCart}
                  className="border-white w-4 h-4 p-[2px] rounded-full border cursor-pointer hover:bg-white hover:text-black flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="2"
                    fill="currentColor"
                    viewBox="0 0 10 2"
                    className="w-full h-full text-white  hover:text-[hsl(14,86%,42%)] transition"
                  >
                    <path d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
                </div>

                <motion.p
                  key={getQuantity(currentId)}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-sm text-white"
                >
                  {getQuantity(currentId)}
                </motion.p>

                {/* Increment quantity */}

                <div
                  onClick={handleAddToCart}
                  className="border-white w-4 h-4 p-[2px] rounded-full border cursor-pointer hover:bg-white hover:text-black flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    viewBox="0 0 10 10"
                    className="w-full h-full text-white  hover:text-[hsl(14,86%,42%)] transition"
                  >
                    <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Info */}
      <div className="h-fit py-8">
        <p className="text-sm text-[hsl(7,20%,60%)]">{productData.category}</p>
        <p className="font-semibold text-[hsl(14,65%,9%)]">
          {productData.name}
        </p>
        <p className="font-semibold text-[hsl(14,86%,42%)]">
          ${productData.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
