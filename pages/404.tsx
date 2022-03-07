import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/Button'
import Section from '../components/Section'
import NotFoundSVG from '../assets/Svg/NotFoundSVG'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Acme Inc.</title>
        <meta name="description" content="Acme Inc." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section moreClasses="lg:w-1/2 mx-auto">
        <div className="flex justify-center">
          <NotFoundSVG />
        </div>
        <p className="font-primary text-dark text-center">
          Página não encontrada!<br></br>
        </p>
        <div className="w-48 my-4 mx-auto">
          <Link href="/">
            <a>
              <Button big text="Voltar para home" />
            </a>
          </Link>
        </div>
      </Section>
    </>
  )
}

export default NotFound
