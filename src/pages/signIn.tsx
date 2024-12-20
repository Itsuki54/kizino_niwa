import { getServerSession } from 'next-auth/next';
import {
  getProviders,
  signIn,
} from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { db } from '@/lib/prisma';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';

const Signin = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white text-black px-4'>
      <div className='max-w-md w-full text-center'>
        <h1 className='text-3xl font-bold mb-6 text-black'>Welcome Back</h1>
        <p className='mb-8 text-neutral-600'>
          Sign in to continue to your account.
        </p>
        <div className='space-y-4'>
          {Object.values(providers).map(provider => (
            <div key={provider.name}>
              <Button
                className='w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3'
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </Button>
            </div>
          ))}
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
      props: { providers: providers ?? [] },
    };
  }
  const userData = await db.user.findUnique(
    {
      where: {
        id: session.user.uid,
      },
    },
  );
  const user = JSON.parse(JSON.stringify(userData));
  if (!user) {
    return {
      props: { providers: providers ?? [] },
    };
  }
  if (session) {
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

export default Signin;
