import React from 'react';
import {View,StyleSheet,Text,FlatList,Image,ScrollView } from 'react-native';
import useResultDetail from '../hooks/useResultDetail';

const ResultDetailScreen = ({navigation})=>{
    const id =  navigation.getParam('id');
    const [result,errorMsg,loading] = useResultDetail(id);
    if(loading){
        return <Text style={styles.loading}>Loading...</Text>
    } 
    return(
            <View style = {styles.containerStyle}>
                {errorMsg ? <Text>Something went wrong!</Text> : null}
                <Text style = {styles.titleStyle}> {result.name} Photo Collections</Text>
                <FlatList
                data = {result.photos}
                showsVerticalScrollIndicator = {false}
                keyExtractor = {(photo)=>photo}
                renderItem = {({item})=>{
                    return(
                        <Image 
                        style = {styles.imageStyle}
                        source = {{uri : item}} />
                    )
                }}
                />
            </View>
        )
     
}

const styles = StyleSheet.create({
    containerStyle:{
        alignItems:"center",
        flex:1
    },  
    titleStyle:{
        marginVertical : 15, fontSize:16, fontWeight:'bold'
    },
    imageStyle:{
        width:300,
        height: 200,
        marginBottom : 15
    },
    loading :{
        
    }
});

export default ResultDetailScreen;