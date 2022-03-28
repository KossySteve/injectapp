import classNames from 'classnames';
import './Input.scss';
import searchIcon from '../../assets/icons/search-24px.svg';
import errorIcon from '../../assets/icons/error-24px.svg';

const Input = ({
  id,
  name,
  type = 'text',
  value,
  placeholder,
  error,
  handleChange,
  className,
}) => {
  const inputContainerClass = classNames('input-container', className);

  const inputClass = classNames('input', {
    'input--error': error,
  });

  return (
    <div className={inputContainerClass}>
      <input
        className={inputClass}
        id={id}
        name={name}
        type={type}
        value={value}
       // placeholder={type === 'search' ? 'Search...' : placeholder}
        onChange={handleChange}
      />
      {type === 'search' && (
        <span className="input__inline-icon">
          <img src={searchIcon} alt="Search" />
        </span>
      )}
      {error && (
        <span className="input__error">
          <img className="input__icon" src={errorIcon} alt="Error" />
          {error}
        </span>
      )}
    </div>
  );
};

const InputGroup = ({ children }) => {
  return <div className="input-group">{children}</div>;
};

const Textarea = ({
  id,
  name,
  placeholder,
  rows = 7,
  cols = 50,
  className,
  handleChange,
  value,
}) => {
  const inputContainerClass = classNames('input-container', className);

  return (
    <div className={inputContainerClass}>
      <textarea
        className="input input--textarea"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        onChange={handleChange}
      />
    </div>
  );
};

const Dropdown = ({ id, name, items, className, handleChange }) => {
  const inputContainerClass = classNames('input-container', className);

  return (
    <div className={inputContainerClass}>
      <select className="input input--dropdown" id={id} name={name} onChange={handleChange}>
        <option value="">Please select</option>
        {items.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
   
    </div>
  );
};

const Radio = ({ id, label, name, value, className, handleChange }) => {
  const inputContainerClass = classNames(
    'input-container input-container--radio',
    className
  );

  return (
    <div className={inputContainerClass}>
      <input
        className="input input--radio"
        id={id}
        name={name}
        type="radio"
        value={value}
        onChange={handleChange}
      />
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export { Input, InputGroup, Textarea, Dropdown, Radio };
export default Input;
