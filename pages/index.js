import { useRef, useState } from 'react';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import Form from '@/components/Form';

export default function Home() {
  const inputRef = useRef();
  const [shortUrl, setShortUrl] = useState('');

  let ifShortUrl = shortUrl != '' ? '' : 'hidden';

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
      className='flex flex-col justify-center gap-6 h-[60vh] 2xl:mx-[20%] xl:mx-20 lg:mx-20
      md:mx-36 sm:mx-0'
    >
      <Form handleLongLink={handleLongLink} >
        <InputField inputRef={inputRef} labelText='Enter your link' />
        <Button text='Shorten It' />
      </Form>
      <a
        href={`/${shortUrl}`}
        target='_blank'
        className={`mt-14 underline hover:no-underline cursor-pointer break-words text-lg
        sm:text-xl ${ifShortUrl} break-words text-center mx-10 sm:mx-0`}
      >
        https://EaseLink.vercel.app/{shortUrl}
      </a>
    </main>
  );
}
