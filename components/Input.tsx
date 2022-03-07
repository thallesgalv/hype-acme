import { InputHTMLAttributes } from 'react'

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="
        border border-primary rounded-sm
        font-primary text-dark font-base
        w-full p-1
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        select
      "
      {...props}
    />
  )
}

export default Input
