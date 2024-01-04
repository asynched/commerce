export const price = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(value)

export const discount = (oldPrice: number, price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'percent',
  }).format(1 - price / oldPrice)
