import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'
import BottomSheet from './BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'


const SearchBar = () =>(
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons name='search-outline' size={20} />
                <TextInput placeholder='Restaurant, groceries, dishes' style={styles.textField}/>
            </View>
            <Link href={'/(modal)/filter'} asChild>
                <TouchableOpacity style={ styles.optionButton}>
                    <Ionicons name='options-outline' size={20} color={Colors.primary}/>
                </TouchableOpacity>
            </Link>
        </View>
    </View>
)

const CustomHeader = () => {
    const bottomSheetRef = useRef <BottomSheetModal > (null)
    const opeModal = () =>{
       bottomSheetRef.current?.present();
    }
  return (
    <SafeAreaView style={styles.safeArea}>
        <BottomSheet ref={bottomSheetRef}/>
      <View style ={styles.container}>
        <TouchableOpacity onPress={opeModal}>
            <Image style={styles.bike} source={require('@/assets/images/Logo2.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer} onPress={opeModal}>
            <Text style={styles.title}>Delivery . Now</Text>
            <View style={{flexDirection : 'row'}}>
                <Text style={styles.subTitle}>London</Text>
                <Ionicons name = 'chevron-down-outline' size={20} color={Colors.primary}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
            <Ionicons name = 'person-add-outline' size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <SearchBar />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor : 'white'
    },

    container: {
        height: 60,
        backgroundColor: 'white',  
        flexDirection: 'row', 
        gap: 20,
        alignItems : 'center',
        justifyContent: 'space-between',
        paddingHorizontal : 20

    },

    bike : {
        width : 40,
        height : 40,
    },

    titleContainer : {
        flex : 1
    },

    title : {
        fontSize : 14,
        color : Colors.medium
    },

    subTitle : {
        fontSize : 20,
    },
    profileButton : {
        backgroundColor : Colors.lightGrey,
        padding : 10,
        borderRadius : 50
    },


    searchContainer : {
        height: 60,
        backgroundColor : 'white'
    },

    searchSection : {
        flexDirection : 'row',
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    searchField : {
        flex: 1,
        borderRadius: 5,
        backgroundColor: Colors.lightGrey,
        padding : 10 ,
        gap: 10,
        flexDirection : 'row',
        alignItems: 'center',
    },

    textField : {
        
    },

    optionButton : {
        padding : 10,
        borderRadius : 50,
    }
});

export default CustomHeader