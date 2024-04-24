
import './UserSelect.scss';

const UserSelect = (props: any) => {
  const { src, title, description, selected, onClick } = props;
  const userSelectClasses = `'userSelect' ${selected ? 'selected' : ''}`;
  const radioCheckClasses = `radioCheck`;

  return (
    <div className={userSelectClasses} onClick={onClick}>
      <div>
        <img width={42} height={42} src={src} alt={title} />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      {selected && (
        <div className={radioCheckClasses}>
          <div className='checkmark'>✔</div>
        </div>
      )}
    </div>
  );
};

export default UserSelect;
