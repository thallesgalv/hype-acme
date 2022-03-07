import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  moreClasses?: string
}

const Section = ({ children, moreClasses }: SectionProps) => {
  return (
    <section className={`bg-light p-6 rounded-sm ${moreClasses || null}`}>
      {children}
    </section>
  )
}

export default Section
