'use client'

import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

interface CardProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CardProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductsToCart: (product: CardProduct) => void
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductsToCart: () => {}
});

const CartProvider = ({ children }: {children: ReactNode}) => {

  const [products, setProducts] = useState<CardProduct[]>([])

  const addProductsToCart = (product: CardProduct) =>{
    setProducts((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        addProductsToCart
      }}
    >
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
