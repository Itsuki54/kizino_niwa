type TagSelectedItemProps = {
  tag: string;
  onDelete: Function;
};

export const TagSelectedItem = ({ tag, onDelete }: TagSelectedItemProps) => {
  return (
    <div className='flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full border  '>
      <div className='text-s font-normal leading-none max-w-full flex-initial m-1'>
        {tag}
      </div>
      <div className='flex flex-auto flex-row-reverse'>
        <div>
          <svg
            className='feather feather-x cursor-pointer rounded-full w-4 h-4 ml-2'
            fill='none'
            height='100%'
            onClick={() => onDelete(tag)}
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            viewBox='0 0 24 24'
            width='100%'
          >
            <line x1='18' x2='6' y1='6' y2='18'></line>
            <line x1='6' x2='18' y1='6' y2='18'></line>
          </svg>
        </div>
      </div>
    </div>
  );
};
