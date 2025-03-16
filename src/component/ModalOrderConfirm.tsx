import React, { useMemo } from "react";
import { motion } from "framer-motion";
import useProductStore from "../store/ProductStore";

interface ModelOrderTypes {
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
  isShowing: boolean;
}

const ModalOrderConfirm = ({ setIsShowing, isShowing }: ModelOrderTypes) => {
  const { cart, resetCart } = useProductStore();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, data) => total + data.quantity * data.price, 0);
  }, [cart]);

  return (
    <div
      onClick={() => setIsShowing(!isShowing)}
      className="fixed  flex justify-center items-center w-full h-full inset-0 bg-black/50 "
    >
      <div className="w-full max-w-xl h-fit bg-white p-8 rounded-lg ">
        <img
          src="/Front-end-mentor-react/product-list/images/icon-order-confirmed.svg"
          alt="order-confirm"
          className="w-9 h-9"
        />

        <h1 className="text-4xl mt-4 font-bold text-[hsl(14,65%,9%]">
          Order Confirmed
        </h1>
        <p className="mt-1 font-medium text-sm text-[hsl(12,20%,44%)]">
          We hope you enjoy your food!
        </p>

        {/* Product items */}
        <div className="h-97 overflow-y-scroll bg-[hsl(20,50%,98%)] mt-5 rounded-xl scrollbar-hidden ">
          {cart.map((data, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.1,
              }}
              key={index}
            >
              <div className="flex justify-between p-5 ">
                <div className="flex">
                  <img
                    src={data.image.thumbnail}
                    alt={data.name + " thumbnail"}
                    className="w-12 h-12 rounded-lg"
                  />

                  <div className="ml-3 flex flex-col justify-center space-y-1">
                    <p className="font-semibold text-sm">{data.name}</p>

                    <div className="flex text-sm">
                      <p className="font-semibold text-[hsl(14,86%,42%)]">
                        {data.quantity}x
                      </p>
                      <p className="font-medium ml-3 text-[hsl(7,20%,60%)]">
                        @ ${data.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center font-semibold text-sm">
                  ${(data.price * data.quantity).toFixed(2)}
                </div>
              </div>

              {/* Line beetween divs */}
              {index !== cart.length - 1 ? (
                <hr className="border-b mx-5 border-[hsl(14,25%,72%)]/30" />
              ) : (
                // Order total
                <div className="border-t mx-5 border-[hsl(14,25%,72%)]/30  flex justify-between items-center py-5">
                  <p className="text-sm font-medium">Order Total</p>
                  <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div
          onClick={resetCart}
          className="mt-7 w-full rounded-full p-3 bg-[hsl(14,86%,42%)] text-[hsl(20,50%,98%)] text-sm cursor-pointer text-center font-medium"
        >
          Start New Order
        </div>
      </div>
    </div>
  );
};

export default ModalOrderConfirm;
