import axios from 'axios';
import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try{
                const {data} = await axios(url);
                if(data){
                    setLoading(false);
                    setData(data.data);
                }
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };
        fetchData();
    }, [url]);

    return {data, loading, error};
}

export default useFetch;