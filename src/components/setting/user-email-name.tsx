import { User } from '@prisma/client';
import { useState } from 'react';
import { IoReloadOutline } from 'react-icons/io5';

type props = {
  user: User;
  email: string;
  setEmail: (value: string) => void;
};

export const UserEmailName = ({ user, email, setEmail }: props) => {
  const [orginEmail, setOrginEmail] = useState(email);

  const cancel = () => {
    setEmail(orginEmail);
  };

  return (
    <div className='w-full md:w-3/5 p-4 lg:ml-4 shadow-md '>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-semibold'>プロフィール</h2>
        <button onClick={cancel}>
          <IoReloadOutline />
        </button>
      </div>
      <div className='pb-2'>
        <label className='font-semibold  block pb-1' htmlFor='about'>
          メールアドレス
        </label>
        <input
          className='border-1 px-4 py-2 w-full'
          id='email'
          onChange={e => setEmail(e.target.value)}
          type='email'
          value={email}
        />
      </div>
    </div>
  );
};
