import { Ionicons } from '@expo/vector-icons'
import {
  Pressable,
  StyleSheet,
  View
} from 'react-native'



export default ({ onPress, style, iconName }) =>
  <View style={[styles.btn, style]}>
    <Pressable onPress={onPress}>
      <Ionicons name={iconName} color="white" size={35} />
    </Pressable>
  </View>





const styles = StyleSheet.create({
  btn: {
    zIndex: 99,
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 0.27,
      width: 4.5,
    },
    elevation: 5,
  },
})
