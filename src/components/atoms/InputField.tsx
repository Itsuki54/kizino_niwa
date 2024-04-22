interface InputProps{
  type: string;
  placeholder: string;
  value: string;
  onChange: Function;
  height?: string;
  width?: string;
}

export function InputField({type, placeholder, value, onChange, height, width}: InputProps){
  return(
    <input
      className="m-1 rounded-md border border-gray-300 p-2"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{height: height, width: width}}
      type={type}
      value={value}
    />
  )
}