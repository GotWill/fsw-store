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
        <div className="">
            <Image
            src="/banner-home-01.png" 
            width={0} 
            height={0} 
            className="w-auto h-full px-5"
            sizes="100vh"
            alt="" />

           <div className="mt-5 px-5">
                <Categories/>
           </div>

           <div className="mt-8">
             <p className="font-bold uppercase pl-5 mb-3">Ofertas</p>
             <ProductList products={deals}/>
           </div>

           <Image
            src="/banner-home-02.png" 
            width={0} 
            height={0} 
            className="w-auto h-full px-5"
            sizes="100vh"
            alt="Até 55% de desconto em mouses" />
        </div>
     );
}

export default Home;