import React from 'react';
import { Text , StyleSheet , View } from 'react-native';

const ComponentScreen = function() {
    const greetingText = <Text> ['3333SDSDSD',' ', 345] </Text>
    return (
    <View>
        <Text style = {style.textStyles}> This is the component </Text>
        {greetingText}
    </View>
    );
}
const style = StyleSheet.create({
 textStyles : {
     fontSize: 30
 }
})
export default ComponentScreen;
