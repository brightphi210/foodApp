import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/constants/Colors'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router'
import categories from '../../assets/data/filter.json'
import { ListRenderItem } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'


interface Category{
  name: string;
  count: number;
  checked?: boolean;
}

const ItemBox = () => (
  <>
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <View style={styles.icons}>
          <Ionicons style={styles.icon} name='swap-vertical-outline' size={20}/>
        </View>
        
        <View style={styles.textView}>
          <Text style={styles.text1}>Sort</Text>
          <Text style={styles.text2}>Recomended</Text>
        </View>
        <Ionicons name='chevron-forward-outline' style={{color: Colors.primary,}} size={20}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.icons}>
          <Ionicons style={styles.icon} name='fast-food-outline' size={20}/>
        </View>
        
        <View style={styles.textView}>
          <Text style={styles.text1}>Hygene rating</Text>
        </View>
        <Ionicons name='chevron-forward-outline' style={{color: Colors.primary,}} size={20}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.icons}>
          <Ionicons style={styles.icon} name='pricetag-outline' size={20}/>
        </View>
        
        <View style={styles.textView}>
          <Text style={styles.text1}>Offer</Text>
        </View>
        <Ionicons name='chevron-forward-outline' style={{color: Colors.primary,}} size={20}/>
      </TouchableOpacity>


      <TouchableOpacity style={styles.item}>
        <View style={styles.icons}>
          <Ionicons style={styles.icon} name='nutrition-outline' size={20}/>
        </View>
        
        <View style={styles.textView}>
          <Text style={styles.text1}>Dietary</Text>
        </View>
        <Ionicons name='chevron-forward-outline' style={{color: Colors.primary,}} size={20}/>
      </TouchableOpacity>
    </View>
    <Text style={styles.categories}>Categories</Text>
    </>
)

const Filter = () => {

  const [items, setItems] = useState<Category[]>(categories);
  const [selected, setSelected] = useState<Category[]>([])
  const flexWidth = useSharedValue(0)

  useEffect(() =>{
    const hasSelected = selected.length > 0;
    const selectedItems = items.filter((item) => item.checked)
    const newSelected = selectedItems. length > 0

    if(hasSelected !== newSelected){
      flexWidth.value = newSelected ? 150 : 0
    }
  }, [items])
  const handleClearAll = () => {
    const updatedItems = items.map((item) =>{
      item.checked = false

      return item
    });

    setItems(updatedItems);
  }


  const animatedStyles = useAnimatedStyle(()=>{
    return{ 
      width : flexWidth.value
    }
  })
  const renderItem : ListRenderItem <Category> = ({item, index})=>(
    <View style={styles.catContainer}>
      <View style={styles.itemCat}>
        <Text style={styles.name}>{item.name} ({item.count})</Text>
        <BouncyCheckbox
          isChecked={items[index].checked}
          size={20}
          fillColor= {Colors.primary}
          unfillColor="#FFFFFF"
          disableBuiltInState
          iconStyle={{ borderColor: Colors.primary, borderRadius : 4 }}
          innerIconStyle={{ borderWidth: 2, borderRadius : 4 }}
          onPress={()=>{
            const isChecked = items[index].checked

            const updateItems = items.map((item)=>{
              if(item.name === items[index].name){
                item.checked = !isChecked
              }

              return item
            })

            setItems(updateItems)
          }} 
        />
      </View>
    </View>
  )
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList data={items}  renderItem={renderItem} ListHeaderComponent={<ItemBox />}/>

 
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={[styles.outlineBtn]}  onPress={handleClearAll}>
              <Text style={styles.outlineBtnText}>Clear All</Text>
            </TouchableOpacity>

          <TouchableOpacity style={styles.fullBtn} onPress={()=> navigation.goBack()}>
            <Text style={styles.btnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding : 24,
    backgroundColor : 'white',
  },

  footer : {
    position : 'absolute',
    bottom : 0,
    left : 0,
    right : 0,
    height : 100,
    backgroundColor : 'white',
    elevation : 10,
    shadowColor : 'black',
    shadowOpacity : 0.1,
    shadowRadius : 10
  },


  buttonContainer : {
    flexDirection : 'row',
    gap : 10,
    justifyContent : 'center',
  },

  outlineBtn : {
    borderColor : Colors.primary,
    borderWidth : 0.5,
    padding : 15,
    marginTop : 20,
    borderRadius : 8,
    alignItems : 'center',
    justifyContent : 'center',
    width : 100
  },

  fullBtn : {
    backgroundColor : Colors.primary,
    padding : 15,
    marginTop : 20,
    borderRadius : 8,
    alignItems : 'center',
    width : 100
  },


  btnText : {
    color : 'white',
    fontSize : 16,
    // flex : 1,
  },


  outlineBtnText : {
    color : Colors.primary,
    fontSize : 16,
  },

  itemContainer : {
    paddingBottom :30
  },

  item : {
    flexDirection : 'row',
    alignItems : 'center',
    gap : 10,
    borderColor : Colors.grey,
    marginBottom : 10,
    padding : 10,
    backgroundColor : Colors.lightGrey,
    borderRadius : 6,
  },


  icons : {
    flexDirection : 'row',
    
  },
  
  
  icon : {
    color : 'gray',
  },

  textView : {
    flex : 1,
  },
  
  text1 : {
    fontSize : 16
  },


  text2 : {
    color : 'gray',
  },


  categories : {
    fontSize : 16,
    fontWeight : 'bold',
    paddingBottom : 20
  },

  catContainer : {
    
  },


  itemCat : {
    flexDirection : 'row',
    paddingVertical : 10
  },

  name : {
    flex : 1,
  },

})

export default Filter