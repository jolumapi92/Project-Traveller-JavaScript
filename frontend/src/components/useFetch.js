import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useFetch = (url) => {
    const history = useHistory();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading('loading...');
        setData(null);
        setError(null);
        axios.get(url)
        .then( res => {
            setLoading(false);
            res.data && setData(res.data);
            console.log(res.data);
        })
        .catch( err => {
            // setLoading(false)
            // setError('An error has occured. Please login or check your internet status');
            history.push('/login')
        })
    }, [url])

    return { data, loading, error }
}
 
export default useFetch;