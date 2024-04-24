import BackButton from '../../components/BackButton/BackButton';
import LayoutWrapper from '../../components/LayoutWrapper/LayoutWrapper';
import ProgressBar from '../../components/Plans/ProgressBar/ProgressBar';
import { useFormData } from '../../services/context';

import './Summary.scss';
import useMobileDetection from '../../utils/hooks';

import IconUser from '../../assets/icons/IconUser.svg';

export default function Summary() {
  const { data } = useFormData();
  const isMobile = useMobileDetection();

  return (
    <LayoutWrapper noFooter>
      <ProgressBar step={2} />
      <div className='summary'>
        {!isMobile && <BackButton />}
        <div className='summary__info'>
          <h1>Resumen del seguro</h1>
          <div>
            <small>Precios calculados para:</small>
            <div className='summary__userData'>
              <img src={IconUser} width={24} height={24} alt="User" />
              <h2>
                {data?.user?.name} {data?.user?.lastName}
              </h2>
            </div>
          </div>
          <hr />
          <div className='summary__paymentData'>
            <span>Responsable de pago</span>
            <p>
              {data?.documentType}: {data?.document}
            </p>
            <p>Celular: {data?.phone}</p>
          </div>
          <div className='summary__planData'>
            <span>Plan elegido</span>
            <p>{data?.plan?.name}</p>
            <p>Costo del plan: ${data?.price} al mes</p>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
