import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View>
      <Text>Bem-vindo à tela inicial!</Text>
      <Link href="/sobre">Ir para Sobre</Link>
    </View>
  );
}