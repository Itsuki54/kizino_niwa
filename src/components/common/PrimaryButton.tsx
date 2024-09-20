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
      className={`font-bold py-2 px-4 rounded
      ${disabled ? " bg-gray-200 text-gray-900 cursor-not-allowed shadow-sm	" : "bg-black text-white hover:bg-gray-600  shadow-sm "}`}
      disabled={disabled}
      onClick={!disabled
        ? () => {
          onClick();
        }
        : undefined}
      style={{ height: height, width: width }}
      title={title}
    >
      {title}
    </button>
  );
}
