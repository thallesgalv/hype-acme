import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="container my-8 mx-auto min-h-[calc(100vh_-_14rem)] px-4 md:px-0">
      {children}
    </main>
  )
}

export default Main
