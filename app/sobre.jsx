import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Sobre() {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Bem-vindo à página Sobre!</Text>
          <Link href="/index" style={styles.button}>Ir para Home</Link>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10, 
    height: 40,
    width: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10

  }
});