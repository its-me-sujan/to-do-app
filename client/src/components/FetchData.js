import {useEffect, useState} from 'react'
import axios from 'axios';

export default function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const FetchData = async () => {
        const {data} = await axios('http://localhost:3900/api/v1/todos');
            setData(data.data);
        };
        FetchData();
    }, []);
  return (
    <>
        {data && data.length > 0 && (
            <>
                <ul>
                    {data.map((todo, index) => (
                        <li key =  {index}>{todo?.title}</li>
                    ))}
                </ul>
            </>
        )}
    </>
  )
}
