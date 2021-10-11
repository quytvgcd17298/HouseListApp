import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Detail = () => {
    return (
        <View style ={styles.style}>
            <Text style ={{fontSize: 30}}>Detail Screen</Text>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    style:{
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:40,
    }
})
