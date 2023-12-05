import { ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/porduct";
import { Separator } from "@radix-ui/react-separator";

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCart size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
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
        </div>
      )}
    </div>
  );
};

export default Cart;
