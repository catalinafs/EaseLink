import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/EaseLink.svg" type="image/x-svg" />
        <title>EaseLink</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
