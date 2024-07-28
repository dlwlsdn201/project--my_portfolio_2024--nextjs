import { ButtonProps, Button as PrimeButton } from "primereact/button";

export const SharedPrimaryButton = ({
  label,
  icon,
  className = "",
  onClick,
}: ButtonProps): React.ReactElement => {
  return (
    <PrimeButton
      label={label}
      icon={icon}
      className={`break-keep m-0 ${className}`}
      onClick={onClick}
    ></PrimeButton>
  );
};
