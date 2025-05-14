import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'; // ✅ Works with Expo
import { auth } from '@/firebaseConfig'; // ✅ Adjust if needed

export default function TabFiveScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  
  const handleSignIn = async () => {
    console.log('🔁 Attempting sign in...');
    if (!email || !password) {
      setStatus('❌ Email and password required');
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('✅ Sign in successful for:', user.email);
      setStatus('✅ Login successful!');
    } catch (error: any) {
      console.error('❌ Sign in error:', error.code, error.message);
  
      if (error.code === 'auth/network-request-failed') {
        setStatus('🛜 Network error: Check internet connection or switch Wi-Fi.');
      } else if (error.code === 'auth/user-not-found') {
        setStatus('👤 No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setStatus('🔐 Incorrect password.');
      } else if (error.code === 'auth/invalid-email') {
        setStatus('✉️ Invalid email format.');
      } else {
        setStatus(`❌ ${error.message}`);
      }
    }
  };


  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/bear.png')}
        style={styles.bear}
      />
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 16, color: '#333', textAlign: 'center' }}>
        {status}
      </Text>

      <TouchableOpacity style={styles.linkContainer}>
        <Text style={styles.linkText}>
          Don't have an account? <Text style={styles.signUpText}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bear: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'left',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#7393B3',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  linkContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#555',
    textDecorationLine: 'underline',
  },
  signUpText: {
    color: '#7393B3',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  underlinedText: {
    fontSize: 20,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});


