import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack
          screenOptions={{
              headerShown: false,
          }}
      >
          <Stack.Screen
              name="index"
              options={{ headerShown: false, title: 'Home' }}
          />
          <Stack.Screen
              name="history/index.tsx"
              options={{ headerShown: false, title: 'history' }}
          />
      </Stack>
  );
}
