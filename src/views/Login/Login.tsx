import './Login.scss';
import Portada from '../../assets/portada-login.png'
import LayoutWrapper from '../../components/LayoutWrapper/LayoutWrapper';
import Button from '../../components/Button/Button';
import DropdownInput from '../../components/DropdownInput/DropdownInput';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Checkbox/Checkbox';
import { useEffect, useState } from 'react';
import Tag from '../../components/Tag/Tag';
import { useFormData } from '../../services/context';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../../services/api';

export default function LoginPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const { setFormValues } = useFormData();

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();

    // Validate form values
    const documentValue = e.target.elements.document.value;
    const documentTypeValue = e.target.elements.documentType.value;
    const phoneValue = e.target.elements.phone.value;
    const policyChecked = e.target.elements.policy.checked;
    const commsChecked = e.target.elements.comms.checked;

    if (
      documentValue.trim() === '' ||
      documentTypeValue.trim() === '' ||
      phoneValue.trim() === '' ||
      !policyChecked ||
      !commsChecked
    ) {
      // Show alert if any field is empty
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    setFormValues({
      document: documentValue,
      documentType: documentTypeValue,
      phone: phoneValue,
      policy: policyChecked,
      comms: commsChecked,
      user: userData,
    });

    navigate('/plans');
  };

  return (
    <LayoutWrapper>
      <section className='home'>
        <aside>
          <img
            className={'home__heroImg'}
            src={Portada}
            loading="eager"
            alt="Rimac Seguros y Reaseguros"
          />
        </aside>
        <form onSubmit={onSubmit} className='home__form'>
          <div className='home__formHeadings'>
            <div className='home__formHeadingsWrapper'>
              <div>
                <Tag text="Seguro Salud Flexible" />
                <h1>Creado para ti y tu familia</h1>
              </div>
              <div className='home__formImg'>
                <img
                  className='home__heroImg'
                  src={Portada}
                  loading="eager"
                  alt="Rimac Seguros y Reaseguros"
                />
              </div>
            </div>
            <hr className='home__separator' />
            <h3>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
              nuestra asesoría. 100% online.
            </h3>
          </div>
          <div className='home__formInputs'>
            <DropdownInput
              placeholder="Nro. de documento"
              dropdownName="documentType"
              inputName="document"
              type="number"
            />
            <Input placeholder="Celular" name="phone" type="number" />
          </div>
          <div className='home__formTerms'>
            <Checkbox
              id="privacyPolicy"
              label="Acepto la Política de Privacidad"
              name="policy"
            />
            <Checkbox
              id="commsPolicy"
              label="Acepto la Política Comunicaciones Comerciales"
              name="comms"
            />
            <a href="#">Aplican Términos y Condiciones.</a>
          </div>
          <Button type="submit" text={'Cotiza aquí'} />
        </form>
      </section>
    </LayoutWrapper>
  )
}
