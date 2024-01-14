import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const Resturant = () => {
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

        <Link href={'/'}>
            <TouchableOpacity>
                <View style={styles.categoryCard}> 
                    <Image style={styles.img} source={require('../assets/images/img3.png')}/>
                    <View style={styles.catBox}>
                        <Text style={styles.catText}>HOP with Morrisons</Text>
                        <Text style={styles.smallText}><Ionicons name='star'/> 4.8 Excellent</Text>
                        <Text style={styles.smallText}>0.7 miles. Free delivery</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>

        <Link href={'/'}>
            <TouchableOpacity>
                <View style={styles.categoryCard}> 
                    <Image style={styles.img} source={require('../assets/images/img1.png')}/>
                    <View style={styles.catBox}>
                        <Text style={styles.catText}>HOP with Morrisons</Text>
                        <Text style={styles.smallText}><Ionicons name='star'/> 4.8 Excellent</Text>
                        <Text style={styles.smallText}>0.7 miles. Free delivery</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>

        <Link href={'/'}>
            <TouchableOpacity>
                <View style={styles.categoryCard}> 
                    <Image style={styles.img} source={require('../assets/images/img2.png')}/>
                    <View style={styles.catBox}>
                        <Text style={styles.catText}>HOP with Morrisons</Text>
                        <Text style={styles.smallText}><Ionicons name='star'/> 4.8 Excellent</Text>
                        <Text style={styles.smallText}>0.7 miles. Free delivery</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>

        <Link href={'/'}>
            <TouchableOpacity>
                <View style={styles.categoryCard}> 
                    <Image style={styles.img} source={require('../assets/images/img1.png')}/>
                    <View style={styles.catBox}>
                        <Text style={styles.catText}>HOP with Morrisons</Text>
                        <Text style={styles.smallText}><Ionicons name='star'/> 4.8 Excellent</Text>
                        <Text style={styles.smallText}>0.7 miles. Free delivery</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>


      </ScrollView>


    </View> 
  )
}

const styles = StyleSheet.create({
    categoryCard : {
        width: 250,
        marginEnd : 10,
        borderColor : 'gray',
        borderWidth : 0.2,
        borderRadius : 5,
        backgroundColor : 'white',
    },

    img : {
        width : 250,
        height : 150,
        flex : 5,
        borderRadius : 5,
    },


    catBox : {
        flex : 3,
        padding : 10
    },

    catText : {
        fontSize : 16,
        fontWeight : 'bold',
    },

    smallText : {
        fontSize : 12,
        color : 'gray',
        paddingTop : 5
    }
    
})

export default Resturant