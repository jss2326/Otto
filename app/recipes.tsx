import { View, Text, StyleSheet } from "react-native";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <Text>Recipes will go here.</Text>
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
