import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { getServerSession } from 'next-auth';
import {
  getProviders,
  signOut,
} from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { UserDataQuery } from '@/utils/query/user.query';

const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
    router.push('/');
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Sign Out</h1>
      <Button onClick={handleSignOut}>Sign Out</Button>
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

export default SignOut;
