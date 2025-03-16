import React from "react";
import { motion } from "framer-motion";
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
  };

  // other props
}

const ProductCard = ({ productData }: ProductProps) => {
  const { addToCart, cart, removeToCart, decreaseItem } = useProductStore();
  const handleAddToCart = () => {
    addToCart(productData);
  };

  const handleRemoveCart = () => {
    decreaseItem(productData);
  };

  return (
    <div className="w-full h-fit  rounded-lg">
      {/* Product image */}
      <div className="relative">
        <img
          src={productData.image.desktop}
          className="w-full h-full bg-cover rounded-lg border-2 border-[hsl(14,86%,42%)]"
          alt=""
        />
        <div className=" w-full flex justify-center absolute -bottom-5 left-0 ">
          <div className="relative bg-white py-2 px-5 rounded-full w-fit flex  font-medium border border-[hsl(7,20%,60%)]">
            <img
              src="/Front-end-mentor-react/product-list/images/icon-add-to-cart.svg"
              className="mr-2 w-4"
              alt=""
            />

            {/* Decrement quantity */}
            <p className="text-xs text-[hsl(14,65%,9%)] font-semibold align-middle">
              Add to cart
            </p>

            {/* Add items - add to cart */}
            <div className="top-0 left-0 absolute w-full h-full bg-[hsl(14,86%,42%)] flex justify-between items-center rounded-full p-2">
              {/* Decrement quantity */}
              <img
                onClick={handleRemoveCart}
                src="/Front-end-mentor-react/product-list/images/icon-decrement-quantity.svg"
                className="border-white  w-4 h-4 rounded-full border p-[2px]"
                alt=""
              />
              <p className="text-sm text-white">{2}</p>

              {/* Increment quantity */}
              <img
                onClick={handleAddToCart}
                src="/Front-end-mentor-react/product-list/images/icon-increment-quantity.svg"
                className=" w-4 h-4 border-white rounded-full border p-[2px]"
                alt=""
              />
            </div>
          </div>
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
