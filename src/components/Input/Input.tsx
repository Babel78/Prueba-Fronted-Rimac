// - Styles
import './Input.scss';

export default function Input(props: any) {
  return (
    <div className='inputWrapper'>
      <label htmlFor="inp" className='input'>
        <input type={props.type} id={props.id} name={props.name} placeholder="&nbsp;" />
        <span className='label'>{props.placeholder}</span>
      </label>
    </div>
  );
}
