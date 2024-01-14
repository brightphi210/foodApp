import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Location = () => {

  const navigate = useNavigation()
  const [location, setLocation] = useState({
    latitude : 9.0820,
    longitude : 8.6753,
    latitudeDelta :-2.5576,
    longitudeDelta : -5.2961
    
  })
  return (
    <View style={{flex : 1}}>
       <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
            language: 'en',
          }}

          styles={{
            container : {
              flex : 0
            }
          }}
      />
      <MapView region={location} showsUserLocation = {true} style={styles.map} />

      <View style={styles.absoluteBox}>
        <TouchableOpacity style={styles.button} onPress={()=>navigate.goBack()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  map : {
    flex: 1
  },

  absoluteBox : {
    position: 'absolute',
    bottom : 20,
    width: '100%'
  },

  button : {
    backgroundColor: Colors.primary,
    padding : 16,
    margin : 16,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
  },

  buttonText : {
    color: 'white',
    fontSize : 16,
    fontWeight : 'bold',
  }
})

export default Location