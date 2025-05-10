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
              name="history"
          />
        
          {/* <Stack.Screen
              name="hello/index.tsx"
              options={{ headerShown: false, title: 'Hello' }}
          /> */}
      </Stack>
  );
}
