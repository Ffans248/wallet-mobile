// screens/HomeScreen.js
import React from 'react';
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, Image } from 'react-native';
import { buttonStyles } from '../styles/homeStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F1F8FF' }}>
      <StatusBar translucent backgroundColor={"#F1F8FF"} barStyle={'dark-content'} />
      
      <TouchableOpacity>
        <FontAwesome name={'info-circle'} color={'#007EEF'} size={50} style={{ marginLeft: '5%', marginTop: '8%' }} />
      </TouchableOpacity>

      <View style={buttonStyles.container}>
        <View style={buttonStyles.container2}>
          <Image source={require('../sources/Logo_Fri.png')} style={buttonStyles.logo} resizeMode='contain' />
          
          <TouchableOpacity 
            style={buttonStyles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: '#007EEF', fontSize: 20 }}>INICIAR SESIÓN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
