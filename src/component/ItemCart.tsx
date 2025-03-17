import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useProductStore from "../store/ProductStore";
import ModalOrderConfirm from "./ModalOrderConfirm";

const ItemCart = () => {
  const { cart, removeFromCart } = useProductStore();
  const [isModalShowing, setModalShowing] = useState(false);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, data) => total + data.quantity * data.price, 0);
  }, [cart]);

  return (
    <div className="w-full mt-2">
      <AnimatePresence>
        {cart.map((data, i) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            className="py-4 border-b border-[hsl(13,31%,94%)] flex justify-between"
            key={i}
          >
            <div>
              {/* Title of product */}
              <p className="text-[clamp(.8rem,1vw,0.875rem)]  font-semibold text-[hsl(14,65%,9%)]">
                {data.name}
              </p>

              {/* Product Number data */}
              <div className="flex justify-between mt-2">
                <div className="flex space-x-3 text-sm ">
                  <p className="font-semibold text-[hsl(14,86%,42%)]">
                    {data.quantity}x
                  </p>
                  <p className="font-medium text-[hsl(7,20%,60%)]">
                    @ ${data.price.toFixed(2)}
                  </p>
                  <p className="font-semibold text-[hsl(12,20%,44%)]">
                    ${(data.quantity * data.price).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Remove product button */}
            <div className="flex justify-center items-center">
              <div
                onClick={() => removeFromCart(data.id)}
                className="rounded-full border-[hsl(7,20%,60%)]  border w-4 h-4 p-[2px] cursor-pointer group hover:border-black "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="text-[hsl(7,20%,60%)] group-hover:text-black transition"
                  viewBox="0 0 10 10"
                >
                  <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="w-full flex flex-col justify-between items-center mt-5">
        <div className="flex justify-between w-full">
          <p className="text-sm">Order Total</p>
          <p className="font-bold text-xl">${totalPrice.toFixed(2)}</p>
        </div>

        <div className="bg-[hsl(20,50%,98%)] w-full flex justify-center mt-5 p-4 rounded-lg ">
          <img
            src="/Front-end-mentor-react/product-list/images/icon-carbon-neutral.svg"
            alt="carbon-icon"
          />

          <p className=" text-[clamp(.8rem,2vw,0.875rem)] ml-2">
            This is a <span className="font-semibold">carbon-neutral</span>{" "}
            delivery
          </p>
        </div>

        {/* Confirm order */}
        <button
          onClick={() => setModalShowing(!isModalShowing)}
          className="w-full rounded-full p-3 bg-[hsl(14,86%,42%)] text-[hsl(20,50%,98%)] text-sm cursor-pointer mt-5"
        >
          Confirm Order
        </button>
      </div>
      <AnimatePresence>
        {isModalShowing && (
          <ModalOrderConfirm
            setIsShowing={setModalShowing}
            isShowing={isModalShowing}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ItemCart;
