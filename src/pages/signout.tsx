import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { signOut } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { UserDataQuery } from '@/utils/query/user.query';

const Signout = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white text-black px-4'>
      <div className='max-w-md w-full text-center'>
        <h1 className='text-3xl font-bold mb-6 text-black'>Sign Out</h1>
        <p className='mb-8 text-neutral-600'>
          Are you sure you want to sign out? You can sign in again anytime.
        </p>
        <div className='space-y-4'>
          <Button
            className='w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3'
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        </div>
      </div>
      <footer className='mt-12 text-neutral-500 text-sm'>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const providers = await getProviders();
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const userData = await UserDataQuery(session.user.uid);
  const user = JSON.parse(JSON.stringify(userData));
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { providers: providers ?? [] },
  };
};

export default Signout;
