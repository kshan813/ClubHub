import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { auth } from '@/firebaseConfig'; // ✅ adjust path if needed

export default function TabSixScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSignUp = async () => {
    console.log('🔁 Signing up with:', email, password, confirmPassword);

    if (!email || !password || !confirmPassword) {
      console.log('❌ All fields required');
      setStatus('❌ All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      console.log('❌ Passwords do not match');
      setStatus('❌ Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('✅ Account created for:', userCredential.user.email);
      setStatus('✅ Account created!');
    } catch (error: any) {
      console.log('❌ Firebase sign-up error:', error.code, error.message);
      setStatus(`❌ ${error.code}: ${error.message}`);
    }
  };

  const handleSignInRedirect = () => {
    console.log('🔁 Redirect to Sign In screen');
    // navigation logic here if needed
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/bear.png')}
        style={styles.bear}
      />
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        textContentType="none"
        autoComplete="off"
        importantForAutofill="no"
        disableFullscreenUI={true} // Android only
      />


      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        textContentType="none"
        autoComplete="off"
        importantForAutofill="no"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {status ? (
        <Text style={{ textAlign: 'center', marginBottom: 12, color: '#333' }}>{status}</Text>
      ) : null}

      <TouchableOpacity onPress={handleSignInRedirect}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.linkText}>Sign In</Text>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 24,
  },
  bear: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 16,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#7393B3',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInText: {
    textAlign: 'center',
    color: '#444',
    textDecorationLine: 'underline',
  },
  linkText: {
    color: '#7393B3',
    fontWeight: 'bold',
  },
});
