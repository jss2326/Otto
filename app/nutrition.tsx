import { View, Text, StyleSheet } from "react-native";

export default function Nutrition() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition</Text>
      <Text>Food tracking coming next.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});
