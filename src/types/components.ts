import { FunctionComponent, SVGProps } from 'react';

export type TButtonSize = 'small' | 'medium' | 'large';

export type TButtonVariant = 'primary' | 'secondary' | 'text';

export type TButtonType = 'button' | 'submit';

export type TIcon = FunctionComponent<SVGProps<SVGSVGElement>>;

export type TFunction = () => {};

export type TButtonProps = {
  text: string;
  type?: TButtonType;
  disabled?: boolean;
  icon?: TIcon;
  className?: string;
  buttonVariant: TButtonVariant;
  buttonSize: TButtonSize;
  isLoading?: boolean;
  onClick?: TFunction;
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

export type TFABbtnRequiredProps = {
  icon: TIcon;
};

export type TFABbtnProps = Partial<
  Omit<TButtonProps, 'buttonVariant' | 'buttonSize' | 'isLoading' | 'isSmall'>
> &
  TFABbtnRequiredProps;

export type TNavItemRequiredProps = {
  showText: boolean;
  icon: TIcon;
  selected: boolean;
};

export type TNavItemProps = Partial<
  Omit<TButtonProps, 'buttonVariant' | 'buttonSize' | 'isSmall'>
> &
  TNavItemRequiredProps;

export type NavDrawerProps = {
  showText: boolean;
};