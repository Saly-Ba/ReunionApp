import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from '../firebase';
import { FlatList } from 'react-native-gesture-handler';

export function getReunion(){
    firebase.database().ref('/reunion').on('value', function(snapshot) {
        console.log(snapshot)
      });
    
}

export default function ListReunions(){
    return(
        <View>
            <TouchableOpacity onPress={getReunion}><Text>Click me!</Text></TouchableOpacity>
        </View>
    );
}