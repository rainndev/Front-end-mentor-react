import React from "react";

interface ProductProps {
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
  };
  // other props
}

const ProductCard = ({ productData }: ProductProps) => {
  return (
    <div className="w-full h-fit  rounded-lg">
      {/* Product image */}
      <div className="relative">
        <img
          src={productData.image.desktop}
          className="w-full h-full bg-cover rounded-lg"
          alt=""
        />
        <div className="w-full flex justify-center absolute -bottom-5 left-0 ">
          <p className="bg-[#212121] text-white py-1 px-3 rounded-full w-fit">
            Add to cart
          </p>
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
