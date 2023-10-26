import { prismaClient } from "@/lib/prisma";

interface ProductDetailsPage {
  params: {
    slug: string
  }
}

const ProductDetailsPage = async ({params: {slug}}: ProductDetailsPage) => {
  const products = await prismaClient.product.findFirst ({
    where: {
      slug: slug
    }
  })

  if (!products) return null;

  return (
    <h1>{products.name}</h1>
  );
}

export default ProductDetailsPage;
