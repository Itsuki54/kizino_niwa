interface ButtonProps {
  title: string;
  height?: string;
  width?: string;
  onClick: Function;
  disabled?: boolean;
}

export function PrimaryButton({ title, height, width, onClick, disabled }: ButtonProps) {
  return (
    <button
      className={`rounded-md p-2 hover:bg-primary-500 ${disabled ? 'bg-primary-500 text-gray-500 cursor-not-allowed' : 'bg-primary-400'}`}
      disabled={disabled}
      onClick={!disabled ? () => onClick() : undefined}
      style={{ height: height, width: width }}
      title={title}
    >
      {title}
    </button>
  );
}
