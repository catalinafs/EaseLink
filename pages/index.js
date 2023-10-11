import { useRef, useState } from 'react';
import InputField from '@/components/InputField';
import Button from '@/components/Button';

export default function Home() {
  const inputRef = useRef();
  const [shortUrl, setShortUrl] = useState('');

  const handleLongLink = (event) => {
    event.preventDefault();
    const url = inputRef.current.value;

    fetch('/api/apiUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url })
    })
      .then((response) => { return response.json() })
      .then((data) => {
        return setShortUrl(data.shortUrl)
      })
  }

  return (
    <main
      // className='flex min-h-screen flex-col items-center justify-between p-24 dark:bg-background-dark'
      className='flex flex-col items-center justify-between p-24'
    >
      <form onSubmit={handleLongLink}>
        <InputField inputRef={inputRef} labelText='Enter your link' />
        <Button text='Shorten It' />
      </form>
      <h2>{shortUrl}</h2>
    </main>
  );
}
