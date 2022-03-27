import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ color, to, handleClick, className, children }) => {
  const buttonClass = classNames('button', className, {
    [`button--${color}`]: color,
  });

  return to ? (
    <Link className={buttonClass} to={to}>
      {children}
    </Link>
  ) : (
    <button
      className={buttonClass}
      type={handleClick ? 'button' : 'submit'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

const LinkButton = ({ color, to = '/', className, children }) => {
  const buttonClass = classNames('button', className, {
    [`button--${color}`]: color,
  });

  return (
    <Link className={buttonClass} to={to}>
      {children}
    </Link>
  );
};

const IconButton = ({ icon, alt, to, handleClick, className }) => {
  const buttonClass = classNames('icon-button', className);

  return to ? (
    <Link className={buttonClass} to={to}>
      <img src={icon} alt={alt} />
    </Link>
  ) : (
    <button className={buttonClass} type="button" onClick={handleClick}>
      <img src={icon} alt={alt} />
    </button>
  );
};

export { Button, LinkButton, IconButton };
export default Button;
