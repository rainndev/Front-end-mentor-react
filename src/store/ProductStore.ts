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
}

interface ProductCreateTypes {
  cart: ProductTypes[];
  addToCart: (product: ProductTypes) => void;
  decreaseItem: (product: ProductTypes) => void;
  removeToCart: (name: string) => void;
}

const useProductStore = create<ProductCreateTypes>((set) => ({
  cart: [],
  decreaseItem: (product) =>
    set((state) => {
      const isExistProduct = state.cart.find(
        (data) => data.name === product.name
      );

      return {
        cart: state.cart.map((data) =>
          data.name === product.name
            ? { ...data, quantity: data.quantity - 1 }
            : data
        ),
      };
    }),

  addToCart: (product) =>
    set((state) => {
      const isExistProduct = state.cart.find(
        (data) => data.name === product.name
      );

      if (isExistProduct) {
        console.log("The product existed: adding quantity");
        return {
          cart: state.cart.map((data) =>
            data.name === product.name
              ? { ...data, quantity: data.quantity + 1 }
              : data
          ),
        };
      } else {
        console.log("The product not existed: adding to the cart");
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),

  removeToCart: (name) =>
    set((state) => ({
      cart: state.cart.filter((data) => data.name !== name),
    })),
}));

export default useProductStore;
