import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'

const Cards = () => {
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
            <Image style={styles.img} source={require('../assets/images/card1.png')}/>
        </View>

        <View style={styles.categoryCard}>
        <Image style={styles.img} source={require('../assets/images/card2.png')}/>
        </View>

        <View style={styles.categoryCard}>
        <Image style={styles.img} source={require('../assets/images/card3.png')}/>
        </View>

      </ScrollView>
    </View> 
  )
}

const styles = StyleSheet.create({
    categoryCard : {
        width: 300,
        height : 150,
        marginEnd : 10,
        marginBottom : 10,
    },

    img : {
        width : 300,
        height : 150,
        borderRadius : 5
    },

})

export default Cards