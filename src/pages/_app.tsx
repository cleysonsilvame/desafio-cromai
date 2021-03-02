import '../styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Desafio Cromai | Pitágoras</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
