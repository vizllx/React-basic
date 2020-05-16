import React from 'react';
import { Text , StyleSheet , View , Image } from 'react-native';

const ImageDetails = (props) => {
return  <View>
    <Text style = {styles.textStyle}>{props.textTitle}</Text>
    <Image source = {props.imageName}/>
    
    </View>
}



const styles = StyleSheet.create ({
    textStyle: {
        fontSize:30
    }
   })
   
   export default ImageDetails;