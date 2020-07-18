import {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default()=>{
    const [results, setResults] = useState([]);
    const [errorMessage,setError] = useState('');
    const [loadings,setLoading] = useState(true);
    const searchApi = async(searchTerm)=>{
        setLoading(true)
        try{
            const response = await yelp.get('/search', {
                params:{
                    limit:50,
                    term: searchTerm,
                    location : 'new york'
                }
            });
            setResults(response.data.businesses);
            setLoading(false)
        }catch(err){
            setError('Something went wrong');
            setLoading(false)
        }
    }
    useEffect(()=>{
        searchApi('pasta')
    },[]);

    return [searchApi,results,errorMessage,loadings];
}