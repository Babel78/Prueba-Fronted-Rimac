// - Styles
import './DropdownInput.scss';

export default function DropdownInput(props: any) {
  return (
    <div className='dropdownInputWrapper'>
      <div className='dropdownWrapper'>
        <select name={props.dropdownName} id={props.dropdownName}>
          <option value="DNI">DNI</option>
          <option value="RUC">RUC</option>
        </select>
      </div>
      <div className='inputWrapper'>
        <label htmlFor="inp" className='input'>
          <input
            type={props.type}
            name={props.inputName}
            id={props.inputName}
            placeholder="&nbsp;"
          />
          <span className='label'>{props.placeholder}</span>
        </label>
      </div>
    </div>
  );
}
