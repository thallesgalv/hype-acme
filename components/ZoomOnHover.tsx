import { useState } from 'react'

interface ZoomOnHoverProps {
  imageSrc: string
  imageName: string
}

const ZoomOnHover = ({ imageSrc, imageName }: ZoomOnHoverProps) => {
  const [transform, setTransform] = useState('')
  const [transformOrigin, setTransformOrigin] = useState('center center')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let div = e.target as HTMLDivElement
    let posX = e.clientX - div.offsetLeft
    let posY = e.clientY - div.offsetTop

    setTransformOrigin(`${posX}px ${posY}px`)
    setTransform('scale(2)')
  }
  const handleMouseLeave = () => {
    setTransformOrigin('center')
    setTransform('scale(1)')
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
      w-full h-min max-h-[50vh] lg:max-h-[70vh] lg:max-w-2xl
      overflow-hidden hover:cursor-zoom-in
      rounded-sm shadow-lg
      "
    >
      <div
        style={{
          transformOrigin: transformOrigin,
          transform: transform,
          transition: 'transform 0.3s ease-out',
          background: `no-repeat center/cover url(${imageSrc})`
        }}
        className="
          object-contain origin-center rounded-sm shadow-lg
          w-full h-96 lg:w-[48rem] lg:h-[48rem]"
        role={`${imageName}`}
      />
    </div>
  )
}

export default ZoomOnHover
