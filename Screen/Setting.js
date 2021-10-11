import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Setting = () => {
    return (
        <View style ={styles.style}>
            <Text style ={{fontSize: 30}}>Setting Screen</Text>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    style:{
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:40,
    }
})
