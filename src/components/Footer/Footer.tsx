import './Footer.scss';
import logo from '../../assets/rimac_logo_blanco.svg';
import LogoMobile from '../../assets/LogoWhiteMobile.png'
import useMobileDetection from '../../utils/hooks';

export default function FooterComponent() {
  const isMobile = useMobileDetection();
  return (
    <footer className='footer'>
      {isMobile ? (
        <img
          className='footer__logo'
          alt="Rimac Seguros y Reaseguros"
          src={LogoMobile}
          width={138}
          height={20}
        />
      ) : (
        <img
          className='footer__logo'
          alt="Rimac Seguros y Reaseguros"
          src={logo}
          width={85}
          height={42}
        />
      )}
      <hr className='footer__separator' />
      <div className='footer__copy'>
        <span>© 2024 RIMAC Seguros y Reaseguros.</span>
      </div>
    </footer>
  )
}