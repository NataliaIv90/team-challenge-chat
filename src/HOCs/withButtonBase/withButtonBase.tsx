import { FunctionComponent, ComponentType } from 'react';
import LoadingIcon from '@icons/icon-loading.svg';

export type TButtonBaseProps = {
  type?: 'button' | 'submit' | 'reset';
  icon?: ComponentType<{ className?: string }>;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children?: JSX.Element | string;
  name?: string;
};

export function withButtonBase<T extends TButtonBaseProps>(
  WrappedComponent: FunctionComponent<T>,
  rootClassName: string,
  iconClassName: string,
  loadingClassName?: string
): FunctionComponent<T> {
  return ({ type = 'button', icon: Icon, isLoading, disabled, onClick, className, children, ...props }) => {
    const combinedClassName = [rootClassName, className].filter(Boolean).join(' ');
    const iconClasses = isLoading ? `${iconClassName} ${loadingClassName}` : iconClassName;

    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={combinedClassName}
      >
        {isLoading ? (
          <LoadingIcon className={iconClasses} />
        ) : Icon ? (
          <Icon className={iconClasses} />
        ) : null}
        <WrappedComponent {...(props as T)}>{children}</WrappedComponent>
      </button>
    );
  };
}
