import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import firebase from '../firebase';
import { Icon } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import _ from 'lodash';


export default function ListReunions({navigation}){
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

    function deleteReunion(key){
        firebase.database().ref(`/reunion/${key}`).remove();
    }
    return(
        <View style={styles.container}>
            <View style={styles.cardFlat}>
                <FlatList
                    data={liste}
                    keyExtractor={(item)=>item.key}
                    renderItem={({item}) =>{
                        return(
                            <View style={styles.card}>
                                    <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between'}}>
                                        <Text style={[styles.textCard, {fontSize:24, fontWeight:'bold'}]}>{item.sujet}</Text>
                                        <Text style={[styles.textCard,{fontWeight:'bold'}]}>{item.dateTime}</Text>
                                    </View>
                                    <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between'}}>
                                        <View>
                                            <Text style={[styles.textCard, {fontSize:20}]}>{item.lieu}</Text>
                                            <Text style={styles.textCard}>{item.participants}</Text>
                                        </View>
                                        <View>
                                            <Icon name='delete'
                                                //reverse
                                                //raised
                                                color='red'
                                                type='material'
                                                size={30}
                                                onPress={()=>{deleteReunion(item.key)}}
                                            />
                                        </View>
                                    </View>
                                
                            </View>
                        )
                    }}
                />  
            </View>
            <Icon
                reverse
                raised
                name='add'
                type='material'
                color='#76ff03'
                //iconStyle={{width:100}}
                size={40}
                containerStyle={styles.addButton}
                onPress={()=>{navigation.navigate("Ajouter une Reunion")}}
            /> 
            <Icon
                reverse
                raised
                name='refresh'
                type='material'
                color='#006064'
                //iconStyle={{width:100}}
                size={30}
                onPress={getReunion}
            />  
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#000',
      //justifyContent: 'center',
      padding:10,
    },
    card:{
        flex:1, 
        borderRadius:20,
        backgroundColor:'#00acc1',
        padding:20,
        marginBottom:20,
        width: '100%',
    },
    cardFlat:{
        flex:1,
        width:'100%'
    },
    textCard:{
        color:'white',
    },
    addButton:{
        position: 'absolute',
        bottom:60,
        right:20,
        width:100,
        height:100,
        backgroundColor:'#76ff03',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    }

});