import { FunctionComponent, SVGProps } from 'react';

export type TButtonSize = 'small' | 'medium' | 'large';

export type TButtonVariant = 'primary' | 'secondary' | 'text';

export type TButtonType = 'button' | 'submit';

export type TIcon = FunctionComponent<SVGProps<SVGSVGElement>>;

export type TButtonProps = {
  text: string;
  type?: TButtonType;
  disabled?: boolean;
  leftIcon?: boolean;
  icon?: TIcon;
  className?: string;
  buttonVariant: TButtonVariant;
  buttonSize: TButtonSize;
  isLoading?: boolean;
  onClick?: () => {};
};

export type TIconBtnVariant = 'outlined' | 'standart';

export type TIconBtnRequiredProps = {
  icon: TIcon;
  buttonVariant: TIconBtnVariant;
  isSmall: boolean;
};

export type TIconButtonProps = Partial<
  Omit<TButtonProps, 'buttonVariant' | 'text' | 'leftIcon' | 'buttonSize'>
> &
  TIconBtnRequiredProps;
