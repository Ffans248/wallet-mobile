
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';
import { buttonStyles } from '../styles/homeStyles';
import { loginStyles } from '../styles/LoginStyles';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F1F8FF' }}>
      <StatusBar translucent backgroundColor={"#F1F8FF"} barStyle={'dark-content'} />

      <View style={buttonStyles.container}>

        <Image source={require('../sources/Logo_Fri.png')} style={buttonStyles.logo} resizeMode='contain' />

        <View style={loginStyles.inputContainer}>
          <TextInput
            style={loginStyles.input}
            placeholder="Usuario"
            placeholderTextColor="#007EEF"
            value={usuario}
            onChangeText={setUsuario}
          />
          <TextInput
            style={loginStyles.input}
            placeholder="Contraseña"
            placeholderTextColor="#007EEF"
            secureTextEntry
            value={contrasena}
            onChangeText={setContrasena}
          />
        </View>

        <TouchableOpacity style={buttonStyles.button} onPress={() => navigation.navigate('Feed')}>
          <Text style={loginStyles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}