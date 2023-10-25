import { prismaClient } from "@/lib/prisma";

interface ProductDetailsPage {
    params: {
        slug: string
    }
}


const ProductDetailsPage = async ({params: {slug}} : ProductDetailsPage) => {
  
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        }
    })

    if(!product) return null;
  
    return ( 
        <h1>{product?.name}</h1>
     );
}
 
export default ProductDetailsPage;