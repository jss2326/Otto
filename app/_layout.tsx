import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs screenOptions={{ headerShown: true }}>
        <Tabs.Screen name="sleep" options={{ title: "Sleep" }} />
        <Tabs.Screen name="food" options={{ title: "Food" }} />
        <Tabs.Screen name="vitals" options={{ title: "Vitals" }} />
        <Tabs.Screen name="recipes" options={{ title: "Recipes" }} />
      </Tabs>
    </>
  );
}
