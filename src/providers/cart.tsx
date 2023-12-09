"use client";

import { ProductWithTotalPrice } from "@/helpers/porduct";
import { Product } from "@prisma/client";
import { ReactNode, createContext, useMemo, useState } from "react";

export interface CardProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CardProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  subTotal: number;
  total: number;
  totalDiscount: number;
  addProductsToCart: (product: CardProduct, quantity?: number) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProduct: (productId: string) => void


}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  subTotal: 0,
  total: 0,
  totalDiscount: 0,
  addProductsToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProduct: () => {}
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CardProduct[]>([]);

  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
     return acc + Number(product.basePrice) * product.quantity
    },0)
  },[products])

  const total = useMemo(()=>{
    return products.reduce((acc, product) => {
      return acc + product.totalPrice * product.quantity
    },0)
  },[products])

  const totalDiscount = total - subTotal;

  const addProductsToCart = (product: CardProduct, quantity?: number) => {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        }),
      );

      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }

        return cartProduct;
      }).filter((cartProduct) => cartProduct.quantity > 0)
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      })
    );
  };

  const removeProduct = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId)
    )
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        subTotal,
        total,
        totalDiscount,
        removeProduct,
        addProductsToCart,
        decreaseProductQuantity,
        increaseProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
