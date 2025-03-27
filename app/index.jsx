import { View, Text, Button } from 'react-native';
import { Link, Stack, useNavigation } from 'expo-router';

export default function Home() {
  const navigation = useNavigation();

  const handShowHeader = () => {
    navigation.setOptions({headerShown: true})
  }

  const handHideHeader = () => {
    navigation.setOptions({headerShown: false});
  }
  return ( 
    <View>
      <Stack.Screen options={{
        title: 'Senai',
        headerRight: () => {
          <Button
            onPress={() => alert ('Olá, Aula de Mobile')}
            title="Info"
            color="#000"
            />
        },
        headerStyle: {
          backgroundColor: '#a0522d'
        },
        headerTintColor: '#f0f8ff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
          
        }

      }}/>

      <Button title="Ocultar Header" onPress={handHideHeader}></Button>
      <Button title="Mostrar Header" onPress={handShowHeader}></Button>
    </View>
  );
}

