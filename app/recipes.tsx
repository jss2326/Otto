import { View, Text } from "react-native";
export default function Recipes() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Recipes</Text>
      <Text>Static list to start.</Text>
    </View>
  );
}
