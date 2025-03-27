import { View, Text, StyleSheet, Button } from "react-native";
import { Link, Stack, useNavigation } from "expo-router";

export default function Sobre() {

  const navigation = useNavigation();

  const handHideHeader = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };

  const handShowHeader = () => {
    navigation.setOptions({
      headerShown: true,
    });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "|| SENAI ||",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
        }}
      />

      <Text style={styles.title}>Esta é a tela Sobre!</Text>
      <Link href="/">Volte para a Home!</Link>
      <Button color="#000" title="Ocultar Hedaer" onPress={handHideHeader} />
      <Button color="#000" title="Mostrar Header" onPress={handShowHeader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
