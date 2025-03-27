import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {

  return (
    <View style={styles.container}>
      <Link href="/sobre" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Simbora para a Sobre</Text>
      </Pressable>
      </Link>

      <Link href="(aux)/termos">Leia os Termos</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    gap: 12,
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