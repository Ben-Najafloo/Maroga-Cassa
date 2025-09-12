import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export default function ProductItem(props: { product: Product }) {
  const { product } = props;
  return (
    <Link
      href={`/products/catalog?id=${product.id}`}
      className="p-2 flex justify-center"
    >
      <Card className="w-72">
        <CardContent>
          <div className="aspect-square rounded bg-gray-100 mb-2">
            <div className="relative flex items-center justify-center h-full text-muted-foreground text-xs">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover w-48 h-48"
              />
            </div>
          </div>
          <CardTitle className="text-sm mb-1">
            {product.title.slice(0, 25)}
          </CardTitle>
          <CardDescription className="text-xs mb-2 line-clamp-2">
            {product.description.slice(0, 35)}
          </CardDescription>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 mb-2">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <StarIcon
                    key={star}
                    className="h-3 w-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <StarIcon className="h-3 w-3 text-gray-300" />
              </div>
              <span className="text-xs text-muted-foreground">(4.0)</span>
            </div>
            <span className="text-sm font-bold pr-1">${product.price}</span>
          </div>
          <div className="flex items-center justify-between mt-3">
            <Button size="sm" className="text-xs px-3 py-2">
              Add to Cart
            </Button>
            <Button size="sm" className="text-xs px-3 py-2">
              <Link href={`/products/${product.id}`}>More Details</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
