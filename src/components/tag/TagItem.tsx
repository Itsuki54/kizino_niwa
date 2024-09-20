interface TagItemProps {
  tag: string;
  onClick: Function;
}

export function TagItem({ tag, onClick }: TagItemProps) {
  return (
    <div
      className="cursor-pointer w-full border-gray-100 border-b hover:bg-gray-50"
      onClick={() => onClick(tag)}
    >
      <div className="flex w-full items-center p-2 pl-2 relative ">
        <div className="w-full items-center flex">
          <div className="mx-2 leading-6  ">{tag}</div>
        </div>
      </div>
    </div>
  );
}
