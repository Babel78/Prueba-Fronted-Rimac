import logo from '../../assets/rimac_logo_color.svg';
import IconTelephone from '../../assets/icons/IconTelephone.svg';
import './Header.scss';
export default function HeaderComponent() {
  return (
    <header className='header'>
      <a href="/">
        <img
          className='header__logo'
          alt="Rimac Seguros y Reaseguros"
          src={logo}
          width={73}
          height={36}
        />
      </a>
      <div className='header__callToAction'>
        <small>¡Compra por este medio!</small>
        <div>
          <img src={IconTelephone} width={20} height={20} alt="Phone" />
          <a href="tel:+014116001">(01) 411 6001</a>
        </div>
      </div>
    </header>
  )
}