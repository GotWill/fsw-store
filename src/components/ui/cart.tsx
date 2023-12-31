import { ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/porduct";
import { Separator } from "@radix-ui/react-separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout"
import {loadStripe} from '@stripe/stripe-js'

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
   const checkout = await createCheckout(products)

   const stripe = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
   )

   stripe?.redirectToCheckout({
    sessionId: checkout.id
   })

  }

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCart size={16} />
        Carrinho
      </Badge>

      <div className="flex h-full max-h-full overflow-hidden flex-col gap-5">
        <ScrollArea className="h-full">
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem
                product={computeProductTotalPrice(product) as any}
                key={product.id}
              />
            ))
          ) : (
            <p className="text-center font-semibold">
              Você ainda não tem nenhum produto no carrinho.
            </p>
          )}
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>subTotal</p>
            <p>R$ {subTotal.toFixed(2)}</p>
          </div>

          <Separator />
          <div className="flex items-center justify-between text-xs">
            <p>Frete</p>
            <p>GRÁTIS</p>
          </div>

          <Separator />
          <div className="flex items-center justify-between text-xs">
            <p>Discountos</p>
            <p>R$ {totalDiscount.toFixed(2)}</p>
          </div>

          <Separator />
          <div className="flex items-center justify-between text-sm font-bold">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>

          <Button onClick={handleFinishPurchaseClick} className="uppercase font-bold mt-7">Finalizar comprar</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
