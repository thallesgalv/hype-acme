import { Product } from '../contexts/ProductsContext'
import ProductSVG from '../assets/Svg/ProductSVG'
import ShelfItem from './ShelfItem'

interface ShelfProps {
  data: Product[]
}

const Shelf = ({ data }: ShelfProps) => {
  return data?.length ? (
    <ul className="flex justify-center flex-wrap gap-4 animate-show">
      {data.map(({ id, name, description, value, imgUrl, isFavorite }) => {
        return (
          <li key={id}>
            <ShelfItem
              id={id}
              name={name}
              description={description}
              value={value}
              imgUrl={imgUrl}
              isFavorite={isFavorite}
            />
          </li>
        )
      })}
    </ul>
  ) : (
    <div className="mx-auto">
      <div className="opacity-50 ">
        <ProductSVG />
      </div>
      <p className="font-primary text-dark text-center">
        Nenhum item que corresponda aos critérios foi encontrado.
      </p>
    </div>
  )
}

export default Shelf
