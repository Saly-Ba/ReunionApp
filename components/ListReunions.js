import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../firebase';
import _ from 'lodash';


export default function ListReunions(){
    const [liste, setListe] = useState();
    function getReunion(){
        firebase.database().ref('/reunion').on('value', function(snapshot) {
            const listOfR = _.map(snapshot.val(), (val, key) =>{
                return {
                    ...val,
                    key:key
                }
            })
            setListe(listOfR)   
        });
    }
    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
                <FlatList
                    data={liste}
                    keyExtractor={(item)=>item.key}
                    renderItem={({item}) =>{
                        return(
                            <View>
                                <Text style={{color:'white'}}>{item.sujet}</Text>
                                <Text style={{color:'white'}}>{item.dateTime}</Text>
                                <Text style={{color:'white'}}>{item.lieu}</Text>
                                <Text style={{color:'white'}}>{item.participants}</Text>
                            </View>
                        )
                    }}
                />
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity onPress={getReunion} style={styles.refresh}><Text style={{color:'white'}}>Click me!</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#000',
      //justifyContent: 'center',
      //padding:20,
    },

    refresh:{
        marginTop: 20,
        backgroundColor:'#006064',
        width: 150,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

});