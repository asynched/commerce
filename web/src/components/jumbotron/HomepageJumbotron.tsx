import { useEffect, useState } from 'react'
import bestPriceIcon from 'src/assets/icons/best-price.svg'

const images = [
  'https://http2.mlstatic.com/D_NQ_856319-MLA73582948925_122023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_887568-MLA73712298369_122023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_725444-MLA73682789086_012024-OO.webp',
]

export default function HomepageJumbotron() {
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
      <div className="max-w-screen-md mx-auto -mt-8 grid grid-cols-3 gap-8 px-8">
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
