import { FunctionComponent } from "react";
import plusIcon from '../../assets/img/icons/icon-plus.svg';
import styles from './Button.module.scss';

type TButtonSize = 'small' | 'medium' | 'large';
type TButtonVariant = 'primary' | 'secondary' | 'text';
type TButtonType = 'button' | 'submit';
type TButtonProps = {
  text: string;
  type?: TButtonType;
  disabled?: boolean;
  leftIcon?: boolean;
  className?: string;
  buttonVariant: TButtonVariant;
  buttonSize: TButtonSize;
  onClick?: () => {};
}

export const Button: FunctionComponent<TButtonProps> = ({
  text,
  type = 'button',
  disabled,
  leftIcon = false,
  className,
  buttonVariant,
  buttonSize,
  onClick
}) => {
  const classNameValue = [
    styles.btn,
    className,
    styles[buttonVariant],
    styles[buttonSize]
  ].filter((el) => el && el.length).join(' ');

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNameValue}
      type={type}
    >
      <span className={leftIcon ? `${styles['btn-content']}` : ''}>
        {leftIcon
          ? <img
            className={`${styles['btn-icon']} ${styles[`btn-icon-${buttonSize}`]}`}
            src={plusIcon}
            alt="plus icon"
          />
          : null
        }
        <span>{text}</span>
      </span>
    </button>
  );
};
