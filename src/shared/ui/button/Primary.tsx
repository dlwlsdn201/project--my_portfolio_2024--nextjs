import { ButtonProps, Button as PrimeButton } from "primereact/button";

export const PrimaryButton = ({
  label,
  icon,
  className = "",
  onClick,
}: ButtonProps) => {
  return (
    <PrimeButton
      label={label}
      icon={icon}
      className={className}
      onClick={onClick}
    />
  );
};
