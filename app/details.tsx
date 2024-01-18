import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const  { width } = Dimensions.get('window')
const IMG_HEIGHT = 300

const Details = () => {

    const scrollRef = useAnimatedRef<Animated.ScrollView>()
    const scrollOfset = useScrollViewOffset(scrollRef)

    const imageAnimatedStyle = useAnimatedStyle(()=>{
        return{
            transform : [
                {
                    translateY : interpolate(
                        scrollOfset.value,
                        [-IMG_HEIGHT, 0, IMG_HEIGHT],
                        [-IMG_HEIGHT/2  , 0, IMG_HEIGHT * 0.75],
                    ),
                },

                {
                    scale : interpolate(scrollOfset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [4, 1, 1])
                }
            ]
        }
    })


  return (
    <View style={styles.constainer}>
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
            <Animated.Image source={require('../assets/images/img3.png')}
                style={ [styles.image, imageAnimatedStyle]}
            />

            <View style={{height: 2000, backgroundColor: '#fff'}}>
                <Text style={{fontSize : 30, fontWeight: 'bold', textAlign: 'center', justifyContent: 'center'}}>
                    Parallax Scroll View
                </Text>
            </View>
        </Animated.ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: 'gray'
    },

    image : {
        width,
        height : IMG_HEIGHT,
    }

})
export default Details