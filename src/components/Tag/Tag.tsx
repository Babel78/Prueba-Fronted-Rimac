// - Styles
import './Tag.scss';

export default function Tag(props: any) {
  return (
    <div className='tag'>
      <span>{props.text}</span>
    </div>
  );
}
