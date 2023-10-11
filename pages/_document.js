import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // <Html lang="en" className='dark'>
    <Html lang="en">
      <Head />
      <body className='dark:bg-secondary-dark bg-background dark:text-text-dark text-text'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
