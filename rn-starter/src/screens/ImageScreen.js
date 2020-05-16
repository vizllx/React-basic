import React from 'react';
import { Text , StyleSheet , View  } from 'react-native';
import ImageDetails from '../Component/ImageDetails'


const ImageScreen = () => {
  return  <View>
      <ImageDetails textTitle = {"Beach"} imageName = {require('../../assets/beach.jpg')}/>
      <ImageDetails textTitle = {"Mountain"} imageName = {require('../../assets/mountain.jpg')}/>
      <ImageDetails textTitle = {"Sea"} imageName = {require('../../assets/beach.jpg')}/>
      <ImageDetails textTitle = {"Forest"} imageName = {require('../../assets/forest.jpg')}/>
  </View>
}



const styles = StyleSheet.create ({
    textStyle: {
        fontSize:30
    }
   })
   
   export default ImageScreen;