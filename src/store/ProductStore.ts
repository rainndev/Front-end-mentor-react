import { create } from "zustand";

interface ProductTypes {
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
}

interface ProductCreateTypes {
  cart: ProductTypes[];
  addToCart: (product: ProductTypes) => void;
  decreaseItem: (id: number) => void;
  removeFromCart: (id: number) => void;
  getQuantity: (id: number) => number;
}

const useProductStore = create<ProductCreateTypes>((set, get) => ({
  cart: [],

  addToCart: (product) =>
    set(() => {
      const cart = get().cart; // Use get() to get latest state
      const isExistProduct = cart.find((data) => data.id === product.id);

      if (isExistProduct) {
        return {
          cart: cart.map((data) =>
            data.id === product.id
              ? { ...data, quantity: data.quantity + 1 }
              : data
          ),
        };
      } else {
        return { cart: [...cart, { ...product, quantity: 1 }] };
      }
    }),

  decreaseItem: (id) =>
    set(() => ({
      cart: get()
        .cart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0), // Remove if quantity is 0
    })),

  removeFromCart: (id) =>
    set(() => ({
      cart: get().cart.filter((product) => product.id !== id),
    })),

  getQuantity: (id) => {
    const product = get().cart.find((p) => p.id === id);
    return product ? product.quantity : 0;
  },
}));

export default useProductStore;
