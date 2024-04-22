interface TextProps{
  placeholder: string;
  value: string;
  onChange: Function;
  height?: string;
  width?: string;
}

export function TextField({placeholder, value, onChange, height, width}: TextProps){
  return(
    <textarea
      className="m-1 block rounded-md border border-gray-300 p-2  text-start"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{height: height, width: width}}
      value={value}
    />
  )
}