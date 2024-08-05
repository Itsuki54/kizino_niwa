interface TagSelectedItemProps {
  tag: string;
  onDelete: Function;
}

export function TagSelectedItem({ tag, onDelete }: TagSelectedItemProps) {
  return (
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full border  ">
      <div className="text-s font-normal leading-none max-w-full flex-initial m-1">
        {tag}
      </div>
      <div className="flex flex-auto flex-row-reverse">
        <div>
          <svg
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-x cursor-pointer rounded-full w-4 h-4 ml-2"
            onClick={() => onDelete(tag)}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}
