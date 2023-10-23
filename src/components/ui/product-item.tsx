import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
    product: Product
}

const ProductItem = ({product}: ProductItemProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="bg-accent rounded-lg h-[170px] w-[156px] flex items-center justify-center">
                <Image src={product.imageUrls[0]}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-auto max-w-[80%] max-h-[70%]"
                style={{objectFit: "contain",}}
                alt={product.name}
                />
            </div>

            <div>

            </div>
        </div>
    );
}
 
export default ProductItem;