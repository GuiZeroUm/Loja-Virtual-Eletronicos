import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computerProductTotalPrice } from "@/helpers/products";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";

interface ProductDetailsPage {
  params: {
    slug: string
  }
}

const ProductDetailsPage = async ({params: {slug}}: ProductDetailsPage) => {
  const product = await prismaClient.product.findFirst ({
    where: {
      slug: slug
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name}/>
      <ProductInfo product={computerProductTotalPrice(product)}/>

      <div>
      <SectionTitle>Produtos Recomendados</SectionTitle>
      <ProductList products={product.category.products}/>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
