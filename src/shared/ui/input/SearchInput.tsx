import { InputText } from "primereact/inputtext";

interface SharedSearchInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @desc 검색 입력 UI 컴포넌트
 */
export const SharedSearchInput = ({
  value,
  onChange,
}: SharedSearchInputProps) => (
  <InputText
    placeholder='Search'
    type='text'
    value={value}
    onInput={onChange}
    className='w-6rem sm:w-auto px-2 border-2 border-gray rounded-lg'
  />
);
