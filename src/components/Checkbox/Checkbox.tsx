// - Styles
import './Checkbox.scss';

export default function Checkbox(props: any) {
  return (
    <div>
      <input
        id={props.id}
        name={props.name}
        className='inputCheckbox'
        type="checkbox"
        style={{ display: 'none' }}
      />
      <label htmlFor={props.id} className='checkbox'>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <span>{props.label}</span>
      </label>
    </div>
  );
}
