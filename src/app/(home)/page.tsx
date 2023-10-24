import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";


async function Home() {

    const deals = await prismaClient.product.findMany({
        where: {
            discountPercentage: {
                gt: 0
            }
        }
    })

    return ( 
        <div className="p-5">
            <Image
            src="/banner-home-01.png" 
            width={0} 
            height={0} 
            className="w-auto h-full"
            sizes="100vh"
            alt="" />

           <div className="mt-5">
                <Categories/>
           </div>

           <div className="mt-8">
             <ProductList products={deals}/>
           </div>
        </div>
     );
}

export default Home;