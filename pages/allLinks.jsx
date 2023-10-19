import { useFetch } from "@/hooks/useFetch";

const allLinks = () => {
  const urlApi = '/api/allLinks';

  const { data, loading, error } = useFetch(urlApi);

  if (error) return (<h2>Fue error de tu pc no el mio, en el mio funciona</h2>);
  if (loading) return (<h2>cargandin ...</h2>);

  console.log(data);

  return (
    <div>
      all links
    </div>
  );
}

export default allLinks;
