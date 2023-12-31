import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategorieItemProps {
  category: Category;
}

const CategorieItem = ({ category }: CategorieItemProps) => {
  return (
    <div>
      <Link href={`/category/${category.slug}`}>
        <Badge
          variant="outline"
          className="flex items-center justify-center gap-2 rounded-lg py-3"
        >
          {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
          <span className="text-xs font-bold">{category.name}</span>
        </Badge>
      </Link>
    </div>
  );
};

export default CategorieItem;
