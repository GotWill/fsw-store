import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";

interface CategorieItemProps {
    category: Category
}


const CategorieItem = ({category}:CategorieItemProps) => {


    
    return ( 
        <div>
            <Badge variant='outline' className="py-3 flex justify-center items-center gap-2 rounded-lg">
                {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
                <span className="font-bold text-xs">{category.name}</span>
            </Badge>
        </div>
     );
}
 
export default CategorieItem;