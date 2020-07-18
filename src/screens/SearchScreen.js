import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';


const SearchScreen=()=>{
    const [term,setTerm]= useState('');
    const [searchApi, results, errorMessage,loadings]  = useResults();
    const filterResultByPrice = (price)=>{
        //price === $ || $$ || $$$
        return results.filter(result =>{
            return result.price === price
        })
    }
   
    if(loadings) return <Text >Loading...</Text>
    return(
        <>
            <SearchBar 
            term = {term} 
            onTermChange={(newTerm)=>setTerm(newTerm)} 
            onTermSubmit = {()=>searchApi(term)}/>

            { errorMessage ?  <Text> {errorMessage} </Text> : null}

            <ScrollView>
                <ResultList results = {filterResultByPrice('$')} title = "Cost Effective" />
                <ResultList results = {filterResultByPrice('$$')} title = "Bit Pricer" />
                <ResultList results = {filterResultByPrice('$$$')} title = "Big Spender" />
            </ScrollView>
            
        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;