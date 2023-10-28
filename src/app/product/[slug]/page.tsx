import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computerProductTotalPrice } from "@/helpers/products";

interface ProductDetailsPage {
  params: {
    slug: string
  }
}

const ProductDetailsPage = async ({params: {slug}}: ProductDetailsPage) => {
  const product = await prismaClient.product.findFirst ({
    where: {
      slug: slug
    }
  })

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name}/>
      <ProductInfo product={computerProductTotalPrice(product)}/>
    </div>
  );
}

export default ProductDetailsPage;
