import ProductDetaid from '@/modules/products/components/ProductDetaid';
import { Data } from '@/modules/products/mock/products';

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const product = Data[1];
  return (
    <div>
      <ProductDetaid {...product} key={product.id} />
    </div>
  );
}

export default Page;
