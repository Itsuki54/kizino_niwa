interface ButtonProps {
  title: string;
  height?: string;
  width?: string;
  onClick: Function;
  disabled?: boolean;
}

export function PrimaryButton({
  title,
  height,
  width,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={` middle none center rounded-lg m-3 py-3 px-6 font-sans text-xs font-bold uppercase shadow-md  transition-all hover:shadow-lg active:opacity-[0.85] p-2 hover:bg-primary-500 ${disabled ? "bg-primary-500 text-gray-500 cursor-not-allowed" : "bg-primary-400"} disabled:opacity-50 disabled:shadow-none`}
      disabled={disabled}
      onClick={!disabled ? () => onClick() : undefined}
      style={{ height: height, width: width }}
      title={title}
    >
      <p>{title}</p>
    </button>
  );
}
