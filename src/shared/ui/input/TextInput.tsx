import { InputText } from "primereact/inputtext";

interface SharedTextInputProps {
  id: string;
  label: string;
  onChange: (value: string) => void;
}

export const SharedTextInput = ({
  id,
  label,
  onChange,
}: SharedTextInputProps): React.ReactElement => {
  return (
    <InputText
      id={id}
      className='w-[100%] border-[1px] border-gray-300 py-1 px-1'
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
