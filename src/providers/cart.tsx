'use client'

import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

interface CardProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CardProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
}

const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
});

const CartProvider = ({ children }: {children: ReactNode}) => {
  return (
    <CartContext.Provider
      value={{
        products: [],
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    ></CartContext.Provider>
  );
};

export default CartProvider;
