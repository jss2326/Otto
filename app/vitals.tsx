import { View, Text, StyleSheet } from "react-native";

export default function Vitals() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vitals</Text>
      <Text>BP, glucose, and custom monitoring tabs coming soon.</Text>
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
