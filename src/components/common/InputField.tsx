type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: Function;
  height?: string;
  widrh?: string;
  className?: string;
};

export const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  height,
  widrh,
  className,
}: InputProps) => {
  return (
    <input
      className={`m-1 rounded-md p-2 border ${className}`}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        height: height ? height : "50px",
        width: widrh ? widrh : "100%",
      }}
      type={type}
      value={value}
    />
  );
};
