import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Listing from '../components/Listing';
const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        return () => {
          FetchAPI();
        }
      }, []);
    const FetchAPI = async() => {
      setLoading(true);
      const data = await fetch(
      "https://my-json-server.typicode.com/PacktPublishing/React-Projects/listings");
      const dataJSON = await data.json();
      setData(dataJSON);
      setLoading(false);
    };

    return (
        <View
        style ={styles.style}>
          {loading? (
            <Text
            style = {{fontSize: 40, color: "blue"}}>Loading..</Text>
          ) : ( 
            <View
            style = {{
              justifyContent:"center",
              alignItems:"center"
              }}>
            <Text
            style = {{fontSize:30 , color:"blue"}}
            >House List</Text>
            <FlatList
             keyExtractor={(item) => String(item.id)}
             data={data}
             renderItem={({item}) => <Listing item={item} />}
            ></FlatList>
            </View>
          )
          }
        </View>
    );
};
export default Home

const styles = StyleSheet.create({
    style:{
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:40,
    }
})
