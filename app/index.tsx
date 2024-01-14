import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Categories from '@/components/Categories'
import { SafeAreaView } from 'react-native-safe-area-context'
import Resturant from '@/components/Resturant'
import Cards from '@/components/Cards'
import { Ionicons } from '@expo/vector-icons'

const Page = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView>
          <Categories />
          <Cards />
          <Text style={styles.header}>Top Picks in your neighbourhood </Text>
          <Resturant />
        </ScrollView>
    </View>
    </SafeAreaView>
    <View style={styles.offerDiv}>
      <Text style={styles.header1}>Offers near you</Text>
      <Ionicons name='arrow-forward-outline' style={styles.myIonins}/>
  </View>
    </>
  )
}


const styles = StyleSheet.create({

  container : {
    top : 90,
    backgroundColor : 'white',
    height : '100%',
  },
  header : {
    fontSize : 15,
    fontWeight : 'bold',
    paddingHorizontal : 16,
  },

  header1 : {
    fontSize : 15,
    fontWeight : 'bold',
    paddingHorizontal : 16,
    flex : 1
  },

  offerDiv : {
    position : 'absolute',
    bottom : 10,
    left : 0,
    right : 0,
    height : 30,
    backgroundColor : 'white',
    flexDirection : 'row',
    alignItems : 'center',
    paddingHorizontal : 20
  },

  myIonins  : {
    fontSize : 20
  }
})
export default Page