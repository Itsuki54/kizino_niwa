interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: Function;
  height?: string;
}

export function InputField({ type, placeholder, value, onChange,height }: InputProps) {
  return (
    <input
      className=" m-1 rounded-md p-2 border border-primary-300"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        height: height ? height : '50px',
        width: '100',
      }}
      type={type}
      value={value}
    />
  );
}
