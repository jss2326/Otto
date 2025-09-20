import { View, Text } from "react-native";
export default function Vitals() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Vitals</Text>
      <Text>BP & Glucose (manual first).</Text>
    </View>
  );
}
