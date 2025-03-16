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
        <div className="py-4 border-b" key={i}>
          <p className="text-sm font-semibold text-[hsl(14,65%,9%)]">
            {data.name}
          </p>
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

            <img
              className="rounded-full border-[hsl(7,20%,60%)]  border w-4 h-4 p-[2px]"
              src="/Front-end-mentor-react/product-list/images/icon-remove-item.svg"
              alt=""
            />

            {/* <p
              onClick={() => removeFromCart(data.id)}
              className="ml-4 rounded-full bg-black text-white px-2"
            >
              X
            </p> */}
          </div>
        </div>
      ))}

      <p className="mt-5">Total ${totalPrice}</p>
    </div>
  );
};

export default ItemCart;
