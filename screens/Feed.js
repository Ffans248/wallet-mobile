
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { feedStyles } from '../styles/feedStyles'; // Asegúrate de tener este archivo
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


export default function Feed() {
  return (
    <View style={feedStyles.container}>
      {/* Header */}
      <View style={feedStyles.header}>
        <Image source={require('../sources/Logo_Fri.png')} style={feedStyles.logo} />
        <View style={feedStyles.headerIcons}>
          <TouchableOpacity style={feedStyles.qrIcon} >
          <FontAwesome name={'qrcode'} color={'#000'} size={35}/>
          </TouchableOpacity>
          <TouchableOpacity style={feedStyles.bellIcon}>
            <FontAwesome name={'bell'} color={'#000'} size={35}/>
            <View style={feedStyles.notificationDot}>
              <Text style={feedStyles.notificationText}>15</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card Balance */}
      <View style={feedStyles.balanceCard}>
        <Text style={feedStyles.balanceAmount}>GTQ 0.00</Text>
        <Text style={feedStyles.username}>@harveyn</Text>
        <Text style={feedStyles.balanceText}>Disponible en billetera</Text>
      </View>

      {/* Body */}
      <View style={feedStyles.section}>
        <Text style={feedStyles.sectionTitle}>Pendientes</Text>
        <View style={feedStyles.transactionCard}>
          <Text style={feedStyles.noTransactionsTitle}>Sin transacciones</Text>
          <Text style={feedStyles.noTransactionsSubtitle}>Presiona enviar, pagar o solicitar.</Text>
        </View>
      </View>

   
    </View>
  );
}
