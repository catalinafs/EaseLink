import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // <Html lang="en">
    <Html lang="en" className='dark'>
      <Head />
      <body className='dark:bg-background-dark bg-background dark:text-text-dark text-text'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
