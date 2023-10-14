import { useRef, useState } from 'react';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import Form from '@/components/Form';

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
      });
  }

  return (
    <main
      className='flex flex-col items-center justify-center h-[60vh] mx-24 2xl:mx-[20%] xl:mx-20 lg:mx-20
      md:mx-36'
    >
      {/* <form onSubmit={handleLongLink}>
        <InputField inputRef={inputRef} labelText='Enter your link' />
        <Button text='Shorten It' />
      </form> */}
      <Form handleLongLink={handleLongLink} >
        <InputField inputRef={inputRef} labelText='Enter your link' />
        <Button text='Shorten It' />
      </Form>
      <h2>{shortUrl}</h2>
    </main>
  );
}
