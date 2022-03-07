import { Product } from '../contexts/ProductsContext'

export const generateProducts = (
  verbsList: string[],
  adjectivesList: string[]
) => {
  let currVerbList = verbsList
  let currAdjectiveList = adjectivesList
  let uid = 1
  let products: Product[] = []
  let loop: number

  const generateProduct = () => {
    const randomVerbIdx = Math.floor(Math.random() * currVerbList.length)
    const randomAdjectiveIdx = Math.floor(
      Math.random() * currAdjectiveList.length
    )

    const verbPicked = currVerbList[randomVerbIdx]
    const adjectivePicked = currAdjectiveList[randomAdjectiveIdx]
    const productName = `${verbPicked} ${adjectivePicked}`
    const productDescription =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus viverra ipsum id semper. Fusce eu tempor nibh, et varius mi. Nulla rutrum non lorem non hendrerit. Nullam semper, erat at efficitur eleifend, augue dolor rutrum erat, a mollis mauris augue in urna.'

    const product = {
      id: uid++,
      name: productName,
      description: productDescription,
      value:
        10 +
        (productName.length * (500 - productDescription.length)) /
          (3 - productName.length),
      imgUrl: `https://picsum.photos/768?random=${uid}`,
      isFavorite: false
    }

    currVerbList = currVerbList.filter((v) => v !== verbPicked)
    currAdjectiveList = currAdjectiveList.filter((v) => v !== adjectivePicked)

    return product
  }

  if (currVerbList.length && currAdjectiveList.length) {
    loop =
      currVerbList.length > currAdjectiveList.length
        ? currAdjectiveList.length
        : currVerbList.length

    for (let i = 0; i < loop; i++) {
      const newProduct = generateProduct()
      products = [...products, newProduct]
    }
  }

  return products
}
