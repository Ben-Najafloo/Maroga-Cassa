import { Data } from '../mock/products';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {Data.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
