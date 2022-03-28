import classNames from 'classnames';
import './Card.scss';

const Card = ({ className, children }) => {
  const cardClass = classNames('card', className);

  return <div className={cardClass}>{children}</div>;
};

const CardHeader = ({ actions, className, children }) => {
  const cardHeaderClass = classNames('card__header', className);

  return (
    <div className={cardHeaderClass}>
      {actions ? <div className="card__actions">{actions}</div> : null}
      {children}
    </div>
  );
};

const CardBody = ({ className, children }) => {
  const cardBodyClass = classNames('card__body', className);

  return <div className={cardBodyClass}>{children}</div>;
};

const CardFooter = ({ className, children }) => {
  const cardFooterClass = classNames('card__footer', className);

  return <div className={cardFooterClass}>{children}</div>;
};

export { Card, CardHeader, CardBody, CardFooter };
