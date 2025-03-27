import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "Sobre" }} />
      <Stack.Screen name="(aux)/termos)" options={{ title: "Termos de Uso" }} />
    </Stack>
  );
}
