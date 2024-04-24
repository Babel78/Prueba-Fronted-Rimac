import useMobileDetection from '../../../utils/hooks';
import './ProgressBar.scss';

import IconProgress from '../../../assets/icons/IconProgress.svg';
import BackButton from '../../BackButton/BackButton';

export default function ProgressBar(props: any) {
  const isMobile = useMobileDetection();
  const { step } = props;

  const progressWidth = (step === 1 ? 3 : step === 2 ? 100 : 0) + '%';

  return (
    <div className={`progressBar ${isMobile ? 'mobile' : ''}`}>
      {isMobile ? (
        <div className='mobileProgressBar'>
          <BackButton />
          <div className='progressText'>Paso {step} de 2</div>
          <div className='progressBarMobile'>
            <div
              className='progressBarMobileFill'
              style={{ width: progressWidth }}
            ></div>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`step ${step === 1 ? 'selected' : ''}`}
          >
            <span>1</span>
            <h3>Planes y coberturas</h3>
          </div>
          <img src={IconProgress} width={25} height={4} alt="Progress" />
          <div
            className={`step ${step === 2 ? 'selected' : ''}`}
          >
            <span>2</span>
            <h3>Resumen</h3>
          </div>
        </>
      )}
    </div>
  );
};
