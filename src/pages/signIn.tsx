import { getServerSession } from 'next-auth/next';
import {
  getProviders,
  signIn,
} from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { UserDataQuery } from '@/utils/query/user.query';

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';

const Signin = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <Button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </Button>
        </div>
      ))}
    </>
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
  const userData = await UserDataQuery(session.user.uid);
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
