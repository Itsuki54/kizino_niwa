type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: Function;
  height?: string;
  width?: string;
  className?: string;
};

export const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  height,
  width,
  className,
}: InputProps) => {
  return (
    <input
      className={`m-1 rounded-md p-2 border ${className}`}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        height: height ? height : "50px",
        width: width ? width : "100%",
      }}
      type={type}
      value={value}
    />
  );
};
