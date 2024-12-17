type DialogProps = {
  title: string;
  description: string;
  isOpen: boolean;
  setIsOpen: Function;
  setIsConfirm: Function;
  setIsCancel: Function;
  confirmText?: string;
  cancelText?: string;
};

export const Dialog = ({
  title,
  description,
  isOpen,
  setIsOpen,
  setIsCancel,
  setIsConfirm,
  confirmText,
  cancelText,
}: DialogProps) => {
  const handleConfirm = () => {
    setIsConfirm(true);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsCancel(true);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-[999] grid  place-items-center  backdrop-blur-sm transition-opacity duration-300 bg-white'>
          <div
            className='relative m-4 w-3/5 min-w-[30%] max-w-[30%] rounded-lg bg-white  leading-relaxed antialiased shadow-2xl'
            data-dialog='dialog'
          >
            <div className='flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased'>
              {title}
            </div>
            <div className='relative p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased'>
              {description}
            </div>
            <div className='flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500'>
              <button
                className='middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase shadow-md transition-all hover:shadow-lg active:opacity-[0.85] '
                onClick={handleCancel}
              >
                {cancelText}
              </button>
              <button
                className='middle none center rounded-lg  py-3 px-6 font-sans text-xs font-bold uppercase shadow-md  transition-all hover:shadow-lg active:opacity-[0.85] '
                onClick={handleConfirm}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
