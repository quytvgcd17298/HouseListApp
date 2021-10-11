import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Listing from '../components/Listing';
const Home = () => {
    const [data, setData] = useState([
        {
            id: 1,
            title: "Canalside house",
            thumbnail: "https://picsum.photos/id/164/400/400",
            price: "$350,000",
          },
          {
            id: 2,
            title: "Old center townhouse",
            thumbnail: "https://picsum.photos/id/405/400/400",
            price: "$800,000",
          },
          {
            id: 3,
            title: "Centrally located appartment",
            thumbnail: "https://picsum.photos/id/1065/400/400",
            price: "$280,000",
          },
          {
            id: 4,
            title: "Downtown apartment",
            thumbnail: "https://picsum.photos/id/1076/400/400",
            price: "$1,200,000",
          },
          {
            id: 5,
            title: "Fairytale castle",
            thumbnail: "https://picsum.photos/id/1040/400/400",
            price: "$5,000,000",
          },
      ]);
    return (
        <View
        style ={styles.style}>
            <Text style ={{fontSize: 30}}>House List</Text>
            <FlatList
             keyExtractor={(item) => String(item.id)}
             data={data}
             renderItem={({item}) => <Listing item={item} />}
            ></FlatList>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    style:{
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:40,
    }
})
