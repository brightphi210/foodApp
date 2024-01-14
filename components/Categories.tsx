import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'

const Categories = () => {
  return (
    <View>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle = {{
            paddingHorizontal : 20,
            paddingVertical : 8
        }}
        >

        <View style={styles.categoryCard}>
            <Image style={styles.img} source={require('../assets/images/img1.png')}/>
            <Text style={styles.catText}>Burgers</Text>
        </View>

        <View style={styles.categoryCard}>
            <Image style={styles.img} source={require('../assets/images/img3.png')}/>
            <Text style={styles.catText}>See Food</Text>
        </View>

        <View style={styles.categoryCard}>
            <Image style={styles.img} source={require('../assets/images/img2.png')}/>
            <Text style={styles.catText}>Dakings</Text>
        </View>

        <View style={styles.categoryCard}>
            <Image style={styles.img} source={require('../assets/images/img1.png')}/>
            <Text style={styles.catText}>Pickup</Text>
        </View>

      </ScrollView>
    </View> 
  )
}

const styles = StyleSheet.create({
    categoryCard : {
        width: 100,
        marginEnd : 10,
        borderRadius : 2,
        borderWidth : 0.2,
        borderColor : 'gray',
    },

    img : {
        width : 100,
        height : 60,
        borderRadius : 3
    },

    catText : {
        fontSize : 14,
        fontWeight : 'bold',
        paddingHorizontal : 5,
        paddingVertical : 3   
    }
})

export default Categories