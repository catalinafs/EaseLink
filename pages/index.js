import { useRef, useState } from 'react';

export default function Home() {
  const inputRef = useRef();
  const [shortUrl, setShortUrl] = useState('');

  const handleLongLink = (event) => {
    event.preventDefault();
    const url = inputRef.current.value;

    fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({url}),
    })
    .then((response) => {response.json()})
    .then((data) => {
      setShortUrl(data)
      console.log(data)
    })
  }

  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-24'
    >
      <h1>Url short</h1>
      <form onSubmit={handleLongLink}>
        <input type='text' placeholder='url' ref={inputRef} className='text-color-[#252525]' />
        <button>acortar</button>
      </form>
      <h2>{shortUrl}</h2>
    </main>
  )
}
