import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  secondary?: boolean
  big?: boolean
}

const Button = ({ text, secondary, big }: ButtonProps) => {
  return (
    <button
      className={`
      font-primary font-semibold uppercase text-xs md:text-sm
      border border-primary rounded-sm
      cursor-pointer transition-all w-full
      ${!secondary ? 'bg-primary text-light' : 'bg-transparent text-primary'}
      ${big ? 'p-3' : 'p-1'}
    `}
    >
      {text}
    </button>
  )
}

export default Button
