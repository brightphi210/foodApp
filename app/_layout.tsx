
import { Stack, useNavigation } from 'expo-router';
import CustomHeader from '../components/CustomHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';



export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};



export default function RootLayoutNav() {
  const navigate = useNavigation()
  return (

    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{
          header : () => <CustomHeader />
        }} />
        <Stack.Screen 
          name="(modal)/filter" options={{
          presentation : 'modal',
          headerTitle : 'Filter',
          headerTitleAlign : 'center',
          headerShadowVisible : false,
          headerBackVisible : false,
          headerLeft: () => ( 
            <TouchableOpacity onPress={()=> navigate.goBack()}>
              <Ionicons name='close-outline' size={25} style={styles.icons}/>
            </TouchableOpacity>
          ),
        }}/>

        <Stack.Screen name='(modal)/location' options={{
          presentation : 'fullScreenModal',
          headerTitle : 'Search Location',
        }}/>
      </Stack>
    </BottomSheetModalProvider>


  );
}

const styles = StyleSheet.create({
  icons : {
    color : Colors.primary,
    fontWeight: 'bold',
  }
})


 