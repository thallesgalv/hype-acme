export const formatString = (value: string) => {
  if (value)
    return value
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
      .replace(/ /g, '-')
  return ''
}
