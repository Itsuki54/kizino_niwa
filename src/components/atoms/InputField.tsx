interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: Function;
  height?: string;
  width?: string;
}

export function InputField({ type, placeholder, value, onChange, height, width }: InputProps) {
  return (
    <input
      className="border-gray-300  m-1 rounded-md p-2 border	"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{ height: height, width: width }}
      type={type}
      value={value}
    />
  );
}
