interface HeadingProps {
  text: string
  moreClasses?: string
}

const Heading = ({ text, moreClasses }: HeadingProps) => {
  return (
    <h1
      className={`font-primary font-semibold text-dark text-6xl ${
        moreClasses || null
      }`}
    >
      {text}
    </h1>
  )
}

export default Heading
