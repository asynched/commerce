import { LOGO_URL } from 'src/config/globals'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { products } from 'src/data/products'
import ProductCard from 'src/components/product/ProductCard'
import HomepageJumbotron from 'src/components/jumbotron/HomepageJumbotron'

const product = products[0]

export default function App() {
  return (
    <div>
      <header className="w-full bg-theme-default">
        <div>
          <div className="max-w-screen-xl mx-auto pt-4 pb-2 grid grid-cols-3 items-center">
            <a href="/">
              <img src={LOGO_URL} alt="Logo" />
            </a>
            <search className="rounded-sm shadow-md px-4 py-2 flex-1 bg-white flex justify-center">
              <input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais..."
                className="flex-1 outline-none"
              />
              <button>
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
              </button>
            </search>
            <div className="flex justify-end">
              <p>Menu</p>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto pt-2 pb-4 text-sm text-gray-600 grid grid-cols-3">
            <p>Informe seu CEP</p>
            <div className="flex gap-2 justify-center">
              <p>Categorias</p>
              <p>Ofertas do dia</p>
              <p>Histórico</p>
              <p>Moda</p>
              <p>Vender</p>
              <p>Contato</p>
            </div>
            <div className="flex gap-2 justify-end">
              <p>Crie sua conta</p>
              <p>Entrar</p>
            </div>
          </div>
        </div>
      </header>
      <HomepageJumbotron />
      <main className="mb-8 max-w-screen-xl mx-auto ">
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
