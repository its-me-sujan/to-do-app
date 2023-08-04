import axios from 'axios';
import {useState, useEffect} from 'react'

const useAxiosFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = false;
        setLoading(true);
        const fetchData = async () => {
            isMounted = true;
            try{
                const {data} = await axios(url);
                if(isMounted && data){
                    setLoading(false);
                    setData(data.data);
                }
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };
        fetchData();
        
        return () => {isMounted = false};
    }, [url]);

    return {data, loading, error};
}

export default useAxiosFetch;