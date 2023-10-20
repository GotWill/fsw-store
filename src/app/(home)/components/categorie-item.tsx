import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface CategorieItemProps {
    category: Category
}


const CategorieItem = ({category}:CategorieItemProps) => {

    const categorieIcon = {
        keyboards: <KeyboardIcon size={16}/>,
        monitors: <MonitorIcon size={16}/>,
        headphones: <HeadphonesIcon size={16}/>,
        mousepads: <SquareIcon size={16}/>,
        speakers: <SpeakerIcon size={16}/>,
        mouses: <MouseIcon size={16}/>
    }
    
    return ( 
        <div>
            <Badge variant='outline' className="py-3 flex justify-center items-center gap-2 rounded-lg">
                {categorieIcon[category.slug as keyof typeof categorieIcon]}
                <span className="font-bold text-xs">{category.name}</span>
            </Badge>
        </div>
     );
}
 
export default CategorieItem;