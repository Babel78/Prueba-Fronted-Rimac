import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

import IconBack from '../../assets/icons/IconBack.svg';
import IconBackMobile from '../../assets/icons/IconBackMobile.svg';

import useMobileDetection from '../../utils/hooks';

export default function BackButton() {
  const navigate = useNavigate();
  const isMobile = useMobileDetection();

  return (
    <div className='backButton' onClick={() => navigate(-1)}>
      {isMobile ? (
        <>
          <img src={IconBackMobile} width={24} height={24} alt="Back" />
        </>
      ) : (
        <>
          <img src={IconBack} width={20} height={20} alt="Back" />
          <span>Volver</span>
        </>
      )}
    </div>
  );
}
