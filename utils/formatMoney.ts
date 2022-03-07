export const formatMoney = (value: number) => {
  let num = value
  if (value < 0) num = value * -1

  return num.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}
