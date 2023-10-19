import { useEffect, useState } from 'react';

export const useFetch = (urlApi) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);

                const api = await fetch(urlApi);
                const data = await api.json();

                setLoading(false);
                setData(data);
            } catch (error) {
                setError(true);
                throw error;
            }
        })();
    }, [urlApi]);

    return { data, error, loading };
}