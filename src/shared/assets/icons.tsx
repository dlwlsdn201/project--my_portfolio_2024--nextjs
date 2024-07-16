interface IconProps {
  iconSize?: string | number;
  color?: string;
  spinning?: boolean;
}

const defaultStyles = {
  fontSize: "1rem",
  color: "black",
};

/**
 * @desc IconProvider is a component that provides the icon to be used in the application
 * @param {string} iconName - The name of the icon to be used
 * @param {string | number} iconSize - The size of the icon
 * @param {string} color - The color of the icon
 * @param {boolean} spinning - The spinning state of the icon
 * @returns
 */
const IconProvider = ({
  iconName,
  iconSize,
  spinning,
  color,
}: IconProps & { iconName: string }) => (
  <i
    className={`pi ${iconName} ${spinning ? "pi-spin" : ""}`}
    style={{
      fontSize: iconSize ?? defaultStyles.fontSize,
      color: color ?? defaultStyles.color,
    }}
  ></i>
);

export const ConfigIcon = ({
  iconSize,
  color,
  spinning,
}: IconProps): React.ReactElement => (
  <IconProvider
    iconName='pi-cog'
    iconSize={iconSize}
    color={color}
    spinning={spinning}
  />
);
