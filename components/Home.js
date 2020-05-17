import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AddReunions from './AddReunions';
export default  Home = ({ navigation }) => {
  //const [modalVisible, setModalVisible] = useState(false);
  return (
      <ImageBackground source={require("../assets/AppBackground3.jpg")}
        style={styles.container}>
          <Text style={styles.txt_acceuil}>Bienvenu(e) dans notre application pour les reunions !</Text>
          <LinearGradient style={styles.btn_get_started} colors={['#006064', '#00acc1']}>
            <TouchableOpacity 
                onPress = {()=> navigation.navigate("Liste des Reunions")}>
                    <Text style={styles.txt_get_started}>Commencer</Text>
            </TouchableOpacity>
          </LinearGradient>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_get_started:{
    marginTop: 50,
    width : 150,
    height : 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,

  },
  txt_get_started:{
    color: 'white',
    fontSize: 20,
  },
  txt_acceuil:{
    color: 'white',
    fontSize : 40,
    textAlign: 'center',
  },

});
