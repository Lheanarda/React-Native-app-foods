import {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default (id)=>{
    const [result,setResult] = useState(null);
    const [errorMsg,setErrorMsg] = useState('');
    const [loading,setLoading] = useState(true);
    
    const getDetailAPI = async()=>{
        try{
            const result = await yelp.get(`/${id}`);
            setResult(result.data);
            setLoading(false);
        }catch(err){
            setLoading(false);
            setErrorMsg(errorMsg);
        }
    }

    useEffect(()=>{
        console.log ("test" + id)
        getDetailAPI(id);
    },[]);

    return [result,errorMsg,loading];
}
