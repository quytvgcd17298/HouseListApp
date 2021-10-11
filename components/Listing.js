import React , {crate} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Listing = ({item}) => {
    return (
       <View
       style = {styles.container}>
           <Image 
           style = {styles.thumbnail}
           source = {{uri: item.thumbnail}}
           ></Image>
           <View>
           <Text style = {styles.id}>{item.id}</Text>
           <Text style = {styles.title}>{item.title}</Text>
           <Text style = {styles.price}>{item.price}</Text>
           </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:"row",
        backgroundColor:"lightblue",
        paddingVertical:10,
        paddingHorizontal:20,
        marginVertical:5,
        margin:10

    },
    thumbnail: {
        borderRadius: 5,
        height: 150,
        width: 150,
        marginRight: "5%",
      },
    id:{
        fontSize:25,
        textTransform:'uppercase'
    },
    title:{
        textTransform:'capitalize'
    },
    price:{
        fontSize:30,
        color:"green"
    }
}
)
export default Listing