import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory} from 'react-router-dom';

const useFetch = (url) => {
    const redirect = useHistory();

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
            console.log(err.response.status)
            if(err.response.status === 403) {
                redirect.push('/travellerLogin')
            } else if(err.response.status === 400) {
                setLoading(null)
                setError('Awkward, please check your internet connection and try again.')
            } else if(err.response.status === 500) {
                setLoading(null)
                setError('Awkward, please check your internet connection and try again.')
            }
        })
    }, [url])

    return { data, loading, error }
}
 
export default useFetch;
