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
}

const useProductStore = create<ProductCreateTypes>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const isExistProduct = state.cart.find((data) => data.id === product.id);

      if (isExistProduct) {
        return {
          cart: state.cart.map((data) =>
            data.id === product.id
              ? { ...data, quantity: data.quantity + 1 }
              : data
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),

  decreaseItem: (id) =>
    set((state) => ({
      cart: state.cart
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0), // Remove if quantity is 0
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),
}));

export default useProductStore;
