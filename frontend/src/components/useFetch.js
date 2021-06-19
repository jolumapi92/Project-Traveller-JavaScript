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
            console.log(err.message)
            redirect.push('/travellerLogin')
            // if(err.message.includes('400') || err.message.includes('500')){
            //     setLoading(null)
            //     setError('Awkward....this should not happen. Try reloading or check your internet connection.')
            // } else if(err.message.includes('403')) {
            //     console.log('Te quiero')
            // }
        })
    }, [url])

    return { data, loading, error }
}
 
export default useFetch;
