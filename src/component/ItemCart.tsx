import { useMemo } from "react";
import useProductStore from "../store/ProductStore";

const ItemCart = () => {
  const { cart, removeFromCart } = useProductStore();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, data) => total + data.quantity * data.price, 0);
  }, [cart]);

  return (
    <div className="w-full mt-2">
      {cart.map((data, i) => (
        <div
          className="py-4 border-b border-[hsl(13,31%,94%)] flex justify-between"
          key={i}
        >
          <div>
            {/* Title of product */}
            <p className="text-sm font-semibold text-[hsl(14,65%,9%)]">
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
            <img
              onClick={() => removeFromCart(data.id)}
              className="rounded-full border-[hsl(7,20%,60%)]  border w-4 h-4 p-[2px] cursor-pointer"
              src="/Front-end-mentor-react/product-list/images/icon-remove-item.svg"
              alt=""
            />
          </div>
        </div>
      ))}

      <div className="w-full flex justify-between items-center mt-5">
        <p className="text-sm">Order Total</p>
        <p className="font-bold text-xl">${totalPrice}</p>
      </div>
    </div>
  );
};

export default ItemCart;
