import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { LOGO_URL } from 'src/config/globals'
import { products } from 'src/data/products'
import bestPriceIcon from 'src/assets/icons/best-price.svg'
import ProductCard from './components/product/ProductCard'

const images = [
  'https://http2.mlstatic.com/D_NQ_856319-MLA73582948925_122023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_887568-MLA73712298369_122023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_725444-MLA73682789086_012024-OO.webp',
]

const product = products[0]

export default function App() {
  return (
    <div>
      <header className="w-full bg-theme-default">
        <div className="py-4 px-8 flex items-center justify-around">
          <a href="/">
            <img src={LOGO_URL} alt="Logo" />
          </a>
          <search className="rounded-sm shadow-md px-4 py-2 w-[400px] bg-white flex">
            <input
              type="text"
              placeholder="Buscar produtos, marcas e muito mais..."
              className="flex-1 outline-none"
            />
            <button>
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </button>
          </search>
          <p>Menu</p>
        </div>
      </header>
      <Jumbotron />
      <main className="mb-8 w-[80%] mx-auto ">
        <div className="grid grid-cols-5 gap-4 w-full">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-2xl tracking-tight font-medium">
              Oferta do dia
            </h2>
            <ProductCard product={product} />
          </div>
          <div className="p-4 col-span-4 bg-white rounded shadow">
            <h2 className="text-2xl tracking-tight font-medium">
              Ofertas da semana
            </h2>
            <div className="grid grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function Jumbotron() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length)
    }, 5_000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <div className="mb-8">
      <img
        src={images[index]}
        alt="Promoções"
        className="h-96 w-full object-cover object-top"
      />
      <div className="w-[40%] mx-auto -mt-8 grid grid-cols-3 gap-8 px-8">
        <div className="bg-white px-4 py-8 flex flex-col items-center rounded-md shadow-md">
          <h1 className="font-medium text-lg text-center">
            Os melhores produtos
          </h1>
          <img src={bestPriceIcon} className="w-24 h-24" />
        </div>
        <div className="bg-white px-4 py-8 text-center rounded-md shadow-md">
          <h1 className="font-medium text-lg">Com os melhores preços</h1>
        </div>
        <div className="bg-white px-4 py-8 text-center rounded-md shadow-md">
          <h1 className="font-medium text-lg">Compra garantida</h1>
        </div>
      </div>
    </div>
  )
}
