

import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {

    return (
        <View>
            <Link href="/sobre" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Ir para Sobre</Text>
                </Pressable>    
            </Link>

            <Link href="/(aux)/termos" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Ir para Termos de Uso</Text>
                </Pressable>
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: '#333',
    },
    section: {
      marginBottom: 20,
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#3b5998',
    },
    sectionText: {
      fontSize: 16,
      color: '#666',
      lineHeight: 24,
    },
    button: {
      backgroundColor: '#3b5998',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignSelf: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });