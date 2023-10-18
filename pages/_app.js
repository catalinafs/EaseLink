import NavBar from '@/components/NavBar/NavBar';
import ContextUse from '@/context';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <ContextUse>
      <Head>
        <link rel="shortcut icon" href="/img/EaseLink.svg" type="image/x-svg" />
        <title>EaseLink</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </ContextUse>
  );
}
