import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
    product: Product
}

const ProductItem = ({product}: ProductItemProps ) => {
    return ( 
        <div className="flex flex-col gap-4">
           <div className="bg-accent rounded-lg w-[156px] h-[170px] flex justify-center items-center">
                <Image 
                src={product.imageUrls[0]} 
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%]"
                style={{
                    objectFit: 'contain'
                }}
                alt=""
                />
           </div>

           <div></div>
        </div>
     );
}
 
export default ProductItem;