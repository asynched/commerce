import { Product } from 'src/data/products'
import { discount, price } from 'src/utils/currency'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="p-2">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="mb-4 w-48 h-48 mx-auto"
      />
      <p className="mb-2">{product.name}</p>
      {!!product.oldPrice && (
        <p className="line-through text-sm text-gray-600">
          {price(product.oldPrice)}
        </p>
      )}
      <div className="mb-2 flex gap-2">
        <p className="text-2xl tracking-tighter">{price(product.price)}</p>
        {!!product.oldPrice && (
          <p className="text-green-600 text-lg tracking-tighter">
            {discount(product.oldPrice, product.price)} OFF
          </p>
        )}
      </div>
      <p className="text-sm tracking-tight">
        em{' '}
        <span className="text-green-600">
          {product.installments.count}x {price(product.installments.value)} sem
          juros
        </span>
      </p>
    </div>
  )
}
