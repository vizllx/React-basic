import React from 'react';
import { Text , StyleSheet , View , FlatList } from 'react-native';

const ListScreen = function() {
    const friendList = [
        {name: 'F1' , age:10},
        {name: 'F2', age: 20},
        {name: 'F3', age: 30},
        {name: 'F4', age: 40},
        {name: 'F5', age: 50},
        {name: 'F6', age: 30},
        {name: 'F7', age: 50},
        {name: 'F8', age: 60},
    ];

    return <FlatList 
    
    showsVerticalScrollIndicator = {false}
    keyExtractor = {item => item.name}
    data ={friendList} 
    renderItem = {({item}) => {
    return <Text style = {styles.listStyle}>{item.name} - AGE {item.age}</Text>
    }}
    />
    
};

const styles = StyleSheet.create ({
 listStyle: {
     marginVertical:10
 }
})

export default ListScreen;