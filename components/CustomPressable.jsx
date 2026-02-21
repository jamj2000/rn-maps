import {
  Pressable,
  StyleSheet,
  Text
} from 'react-native'




export default ({ children, ...rest }) =>
  <Pressable style={styles.btnPrimary} {...rest}>
    <Text style={{ color: 'white' }}>{children}</Text>
  </Pressable>




const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    margin: 10,
  },
})
