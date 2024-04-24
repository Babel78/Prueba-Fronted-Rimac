import "./Button.scss";

export default function ButtonComponent(props: any) {
  return (
    <button type={props.type} onClick={props.onClick} className='button'>
      {props.text}
    </button>
  );
}