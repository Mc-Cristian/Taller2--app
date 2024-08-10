import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
    // Mostrar datos en la consola
    console.log(`Nombre: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Número de Teléfono: ${phoneNumber}`);
    console.log(`Contraseña: ${password}`);
    
    //Registro
    Alert.alert('Registro', `Nombre: ${fullName}\nEmail: ${email}\nNúmero de Teléfono: ${phoneNumber}\nContraseña: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Crea una Cuenta</Text>
      <Text style={styles.subtitle}>Ingresa tus datos Personales</Text>
      <Text style={styles.title}>Registro Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Teléfono"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
          <Icon name={showConfirmPassword ? 'eye' : 'eye-slash'} size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Registrar" onPress={handleRegister} color="#28a745" />
        <Button title="Ir a Inicio" onPress={() => navigation.navigate('Inicio Usuario')} color="#007bff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#d4edda', 
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000', 
    marginBottom: 10,
    marginTop: 20, 
    alignSelf: 'flex-start', 
  },
  subtitle: {
    fontSize: 16,
    color: '#000', 
    marginBottom: 20,
    alignSelf: 'flex-start', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#155724', 
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff', 
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 12,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
