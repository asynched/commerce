export type Product = {
  id: string
  name: string
  oldPrice?: number
  price: number
  imageUrl: string
  installments: {
    count: number
    value: number
  }
  shipping: {
    free: boolean
    full: boolean
  }
  store: {
    id: string
    name: string
  }
}

export const products: Product[] = [
  {
    id: crypto.randomUUID(),
    name: 'Smart TV Samsung BET-B HD 32" Bivolt',
    oldPrice: 1831,
    price: 1179,
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_621534-MLU72750634412_112023-V.webp',
    installments: {
      count: 10,
      value: 117.9,
    },
    shipping: {
      free: true,
      full: true,
    },
    store: {
      id: crypto.randomUUID(),
      name: 'MyStore',
    },
  },
  {
    id: crypto.randomUUID(),
    name: 'Smartphone Samsung Galaxy A04e 64GB Preto 3GB RAM',
    oldPrice: 1099,
    price: 559,
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_758778-MLU73438018226_122023-AB.webp',
    installments: {
      count: 10,
      value: 55.9,
    },
    shipping: {
      free: true,
      full: true,
    },
    store: {
      id: crypto.randomUUID(),
      name: 'MyStore',
    },
  },
  {
    id: crypto.randomUUID(),
    name: 'Bicicleta Aro 29 Krw Alumínio 24 Vel Freio a disco X42',
    oldPrice: 1899,
    price: 879,
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_986917-MLU45677443224_042021-V.webp',
    installments: {
      count: 10,
      value: 87.9,
    },
    shipping: {
      free: false,
      full: false,
    },
    store: {
      id: crypto.randomUUID(),
      name: 'MyStore',
    },
  },
  {
    id: crypto.randomUUID(),
    name: 'Tablet Samsung Galaxy Tab A9+ 5g 64GB 4GB RAM',
    oldPrice: 1999,
    price: 1344,
    imageUrl:
      'https://http2.mlstatic.com/D_Q_NP_2X_646605-MLU73437765588_122023-AB.webp',
    installments: {
      count: 10,
      value: 134.4,
    },
    shipping: {
      free: false,
      full: false,
    },
    store: {
      id: crypto.randomUUID(),
      name: 'MyStore',
    },
  },
]
