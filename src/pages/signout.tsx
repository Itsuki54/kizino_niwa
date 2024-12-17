import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import {
  getProviders,
  signOut,
} from 'next-auth/react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { UserDataQuery } from '@/utils/query/User.query';

const SignOut = () => {
  return (
    <Link href='/'>
      <Button onClick={() => signOut()}>Sign out</Button>
    </Link>
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
