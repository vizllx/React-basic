import React from 'react';
import { Text , StyleSheet , View } from 'react-native';

const ComponentScreen = function() {
    const name = 'Sam'
    const greetingText = <Text style = {style.subStyles}> My Name is {name} </Text>
    return (
    <View>
        <Text style = {style.textStyles}> Getting strated with React !  </Text>
        {greetingText}
    </View>
    );
}
const style = StyleSheet.create({
 textStyles : {
     fontSize: 45
 },
 subStyles : {
    fontSize: 20
},
})
export default ComponentScreen;
