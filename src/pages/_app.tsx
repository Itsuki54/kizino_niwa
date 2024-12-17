import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import { Toaster } from '@/components/ui/toaster';

import '@/styles/globals.css';
import 'github-markdown-css';

import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link
          href='/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link href='/favicons/site.webmanifest' rel='manifest' />
        <link
          color='#5bbad5'
          href='/favicons/safari-pinned-tab.svg'
          rel='mask-icon'
        />
        <meta content='#da532c' name='msapplication-TileColor' />
        <meta content='#ffffff' name='theme-color' />
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </SessionProvider>
  );
}
