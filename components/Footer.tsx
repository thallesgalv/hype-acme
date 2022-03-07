import { SiGithub } from 'react-icons/si'
import LogoGalvSVG from '../assets/Svg/LogoGalvSVG'

const Footer = () => {
  return (
    <footer className="md:h-20 text-center bg-light shadow-md py-2 flex justify-center gap-2 md:gap-4 flex-col md:flex-row">
      <p className="font-primary text-dark text-xs flex justify-center items-center">
        <span> Projeto desenvolvido por </span>
        <a target="_blank" href="https://thallesgalvao.com.br" className="ml-1">
          <LogoGalvSVG />
        </a>
      </p>
      <p className="font-primary text-dark text-xs flex justify-center items-center">
        <span> Link do Repositório: </span>
        <a
          target="_blank"
          href="https://github.com/thallesgalv/hype-acme"
          className="ml-1 text-2xl text-primary"
        >
          <SiGithub />
        </a>
      </p>
    </footer>
  )
}

export default Footer
