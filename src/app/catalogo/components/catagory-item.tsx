import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
    category: Category
}

const CategoryIem = ({category}: CategoryItemProps) => {
    return (
        <div className="flex flex-col">
            <div className="w-full h-[150px] rounded-tl-lg rounded-tr-lg flex items-center justify-center bg-category-item-gradient">
                <Image
                src={category.imageUrl}
                alt={category.name}
                width={0}
                height={0}
                sizes="500vw"
                className="h-auto w-auto max-w-[80%] max-h-[70%]"
                style={{objectFit: "contain",}}
                />
            </div>

            <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg text-center">
                <p className="text-sm font-semibold">{category.name}</p>
            </div>
        </div>
    );
}
 
export default CategoryIem;