import './Form.scss';

export default function FormComponent() {
  return (
    <div>
      <div className="login__right--mobil">
        <div>
          <div className="tag-promo">Seguro Salud Flexible</div>
          <div className="info">
            <h1 className="primary-text">Creado para ti y tu familia</h1>
            <h2 className="second-text">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</h2>
          </div>
        </div>
        <div className="hide-for-desktop login__right--mobil--img">
          <img src="./portada-login.png" alt="" />
        </div>
      </div>
      <form className='formulario'>
        <div className="inputSelect">
          <div className="inputSelect__select">
            <select id="documentType" name="documentType">
              <option value="DNI">DNI</option>
              <option value="RUC">RUC</option>
            </select>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa fa-angle-down i" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
          </div>
          <div className="inputSelect__value w-full">
            <input type="text" id="document" name="documentNumber" placeholder=" " maxLength={8} value="" />
            <label htmlFor={"document"} className="before"><div className="paragraph font-br-sonoma-regular">Nro. de documento</div></label>
          </div>
        </div>
      </form>
    </div>
  )
}