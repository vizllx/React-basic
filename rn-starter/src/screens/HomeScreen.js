import React from "react";
import { Text, StyleSheet,View , Button , TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hello thsssssere !!</Text>
    <Button
    title = "Go To Component"
    onPress = {() => navigation.navigate("Component")}     
     />

  <Button
    title = "Go To List"
    onPress = {() => navigation.navigate("List")}     
     />

<Button
    title = "Go To Image List"
    onPress = {() => navigation.navigate("ImageList")}     
     />


     {/* <TouchableOpacity onPress = {() => {console.log("List screen button press")}}>
       <Text>Go To List Screen</Text>
     </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
