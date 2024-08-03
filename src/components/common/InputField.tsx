interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: Function;
  height?: string;
  widrh?: string;
}

export function InputField({
  type,
  placeholder,
  value,
  onChange,
  height,
  widrh,
}: InputProps) {
  return (
    <input
      className=" m-1 rounded-md p-2 border"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        height: height ? height : "50px",
        width: widrh ? widrh : "100%",
      }}
      type={type}
      value={value}
    />
  );
}
