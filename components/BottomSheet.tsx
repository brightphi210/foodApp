import { View, Text, Button, StyleSheet } from 'react-native'
import React, {forwardRef, useCallback, useMemo} from 'react'
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export type Ref = BottomSheetModal
const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(()=>['50%'], [])
    const renderBackdrop = useCallback((props : any) => 
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, [])
    const {dismiss} = useBottomSheetModal()
  return (
    <BottomSheetModal 
      ref={ref} 
      snapPoints={snapPoints} backdropComponent={renderBackdrop}
      backgroundStyle ={{borderRadius : 0}}
      >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.btnTextActive}>Delivery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.toggleNoAcctive}>
            <Text style={styles.btnTextNoActive}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subHeader}>Your Location</Text>
        <Link href={'/'} asChild>
          <TouchableOpacity style={styles.firstItem}>
            <Ionicons name='location-outline' size={20} style={{color : 'gray'}}/>
            <Text style={styles.location}>Current Location</Text>
            <Ionicons name='chevron-forward' size={20} style={{color : Colors.primary}}/>
          </TouchableOpacity>
        </Link>

        <Text style={styles.subHeader}>Arival Time</Text>
        <Link href={'/'} asChild>
          <TouchableOpacity style={styles.firstItem}>
            <Ionicons name='location-outline' size={20} style={{color : 'gray'}}/>
            <Text style={styles.location}>Now</Text>
            <Ionicons name='chevron-forward' size={20} style={{color : Colors.primary}}/>
          </TouchableOpacity>
        </Link>


        <TouchableOpacity style={styles.button} onPress={ () =>dismiss()}>
            <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View> 
    </BottomSheetModal>
  )
})


const styles = StyleSheet.create({

  button : {
    backgroundColor : Colors.primary,
    padding : 15,
    margin : 20,
    borderRadius : 8,
    alignItems : 'center',
    justifyContent : 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  contentContainer :{
    flex : 1,
  },

  toggle : {
    flexDirection : 'row',
    justifyContent : 'center',
    gap : 15,
    paddingVertical : 20,
    alignItems : 'center',
  },

  toggleActive : {
    backgroundColor : Colors.primary,
    paddingVertical : 6,
    paddingHorizontal : 20,
    borderRadius : 20,
  },
  toggleNoAcctive : {},
  
  btnTextActive : {
    color : 'white',
  },
  btnTextNoActive : {
    color : Colors.primary,
    fontWeight : 'bold',
  },

  subHeader : {
    fontSize : 16,
    fontWeight : 'bold',
    margin : 16
  },

  firstItem : {
    flexDirection : 'row',
    gap : 10,
    paddingHorizontal : 20,
    paddingVertical : 15,
    alignItems : 'center',
    backgroundColor : Colors.lightGrey
    
  },

  location : {
    flex : 1,
  }

  

})

export default BottomSheet