import { useState, useEffect } from 'react';
import UserSelect from '../../components/Plans/UserSelect/UserSelect';
import PlanSelect from '../../components/Plans/PlanSelect/PlanSelect';
import ProgressBar from '../../components/Plans/ProgressBar/ProgressBar';
import BackButton from '../../components/BackButton/BackButton';
import LayoutWrapper from '../../components/LayoutWrapper/LayoutWrapper';
import { calculateAge, convertToPascalCase } from '../../utils/functions';

import './Plans.scss';

import { fetchPlansData } from '../../services/api';

import { useFormData } from '../../services/context';

import useMobileDetection from '../../utils/hooks';

import IconPlanExternal from '../../assets/icons/IconPlanExternal.svg';
import IconPlanUser from '../../assets/icons/IconPlanUser.svg';
import { useNavigate } from 'react-router-dom';

type PlansData = {
  list: [];
}

export default function Plans() {
  const navigate = useNavigate();
  const isMobile = useMobileDetection();
  const { setFormValues, data } = useFormData();

  const [plansData, setPlansData] = useState<PlansData>();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(null);
  const [userOption, setUserOption] = useState(null);

  useEffect(() => {
    fetchPlansData()
      .then((data) => {
        setPlansData(data);
      })
      .catch((error) => {
        console.error('Error fetching plans data:', error);
      });

  }, []);

  useEffect(() => {
    if (selectedPlan && userOption) {
      setFormValues({
        plan: selectedPlan,
        userType: userOption,
        price: selectedPlanPrice,
      });
      navigate('/summary');
    }
  }, [selectedPlan, userOption, selectedPlanPrice]);

  const handlePlanSelection = (plan: any) => {
    setSelectedPlan(plan);
    setSelectedPlanPrice(
      userOption === 'option2' ? plan.price * 0.95 : plan.price
    ); // Apply discount if needed
  };

  const handleUserOption = (item: any) => {
    setUserOption(item);
  };

  const userAge = calculateAge(data?.user?.birthDay);

  const suitablePlans = plansData?.list?.filter((plan: any) => userAge <= plan.age);

  //Add image URL to each plan
  suitablePlans?.forEach((plan: any, index: any) => {
    const planNameToPascalCase = convertToPascalCase(plan.name);
    const url = `assets/icons/Icon${planNameToPascalCase}.png`;

    plan.url = url;
  });

  return (
    <LayoutWrapper noFooter>
      <section className='plans'>
        <ProgressBar step={1} />
        <div className='plans__wrapper'>
          {!isMobile && <BackButton />}
          <h1>{data?.user?.name} ¿Para quién deseas cotizar?</h1>
          <h2>Selecciona la opción que se ajuste más a tus necesidades.</h2>
          <div className='plans__userBoxes'>
            <UserSelect
              title="Para mi"
              description="Realiza una cotización para uno de tus familiares o cualquier persona."
              selected={userOption === 'option1'}
              onClick={() => handleUserOption('option1')}
              src={IconPlanUser}
            />
            <UserSelect
              title="Para alguien más"
              description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              selected={userOption === 'option2'}
              onClick={() => handleUserOption('option2')}
              src={IconPlanExternal}
            />
          </div>
          <div className='plans__boxes'>
            {userOption &&
              suitablePlans?.map((plan: any, index: any) => (
                <PlanSelect
                  key={index}
                  plan={plan}
                  onSelect={handlePlanSelection}
                  applyDiscount={userOption === 'option2'}
                />
              ))}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
