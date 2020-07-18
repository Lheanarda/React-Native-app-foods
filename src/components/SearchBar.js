import React from 'react';
import {View,TextInput,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar=({term,onTermChange,onTermSubmit})=>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStye} />
            <TextInput
            onEndEditing = {onTermSubmit}
            autoCorrect = {false}
            style = {styles.inputStyle}
            placeholder= "Search"
            value = {term}
            onChangeText = {newTerm=>onTermChange(newTerm)} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height : 50,
        borderRadius : 5,
        marginHorizontal: 15,
        flexDirection:'row',
        marginTop:16,
        marginBottom: 8
    },
    iconStye:{  
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:15
    },
    inputStyle:{
        flex:1,
        fontSize:18
    }
});

export default SearchBar;