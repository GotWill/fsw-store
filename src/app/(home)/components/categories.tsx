import { prismaClient } from "@/lib/prisma";
import CategorieItem from "./categorie-item";

const  Categories = async () => {

    const categories = await prismaClient.category.findMany({})
    return ( 
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 ">
            {
              categories.map((categorie) => <CategorieItem key={categorie.id} category={categorie}/>)  
            }
        </div>
     );
}
 
export default Categories;