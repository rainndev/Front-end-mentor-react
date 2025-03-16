import { useMemo } from "react";
import useProductStore from "../store/ProductStore";

const ItemCart = () => {
  const { cart, removeFromCart } = useProductStore();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, data) => total + data.quantity * data.price, 0);
  }, [cart]);

  return (
    <div className="w-full ">
      {cart.map((data, i) => (
        <div key={i}>
          <p>{data.name}</p>
          <div className="flex space-x-3">
            <p>{data.quantity}x</p>
            <p>@{data.price}</p>
            <p>${data.quantity * data.price}</p>
            <p
              onClick={() => removeFromCart(data.id)}
              className="ml-4 rounded-full bg-black text-white px-2"
            >
              X
            </p>
          </div>
        </div>
      ))}

      <p className="mt-5">Total ${totalPrice}</p>
    </div>
  );
};

export default ItemCart;
