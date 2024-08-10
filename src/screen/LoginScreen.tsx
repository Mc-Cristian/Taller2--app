import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de inicio de sesión
    Alert.alert('Inicio de Sesión', `Email: ${email}\nContraseña: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Bienvenido</Text>
      <Text style={styles.subtitle}>Ingresa tu Usuario</Text>
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
      <View style={styles.buttonContainer}>
        <Button title="Iniciar Sesión" onPress={handleLogin} color="#28a745" />
        <Button title="Ir a Registro" onPress={() => navigation.navigate('Registro Usuario')} color="#007bff" />
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
    color: '#000', // Color negro
    marginBottom: 10,
    marginTop: 20, // Reducir el margen superior para acercar el título a la parte superior
    alignSelf: 'flex-start', // Alinear a la izquierda
  },
  subtitle: {
    fontSize: 16,
    color: '#000', // Color negro
    marginBottom: 20,
    alignSelf: 'flex-start', // Alinear a la izquierda
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
