import Button from "../../Button/Button";
import './PlanSelect.scss';

export default function PlanSelect(props: any) {
  const { plan, onSelect, applyDiscount } = props;
  const { name, price, description, url } = plan;

  const getPlanPrice = applyDiscount ? price * 0.95 : price;
  return (
    <div className='planSelect'>
      <div className='planSelect__info'>
        <div className='planSelect__infoText'>
          <h2>{name}</h2>
          <small>Costo del plan</small>
          <p>${getPlanPrice} al mes</p>
        </div>
        <div className='planSelect__infoImg'>
          <img width={56} height={56} src={url} alt={name} />
        </div>
      </div>
      <ul className='planSelect__descriptions'>
        {description.map((item: any, index: any) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className='planSelect__button'>
        <Button onClick={() => onSelect(plan)} text="Seleccionar plan" />
      </div>
    </div>
  );
}