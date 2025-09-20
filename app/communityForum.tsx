import { View, Text, StyleSheet } from "react-native";

export default function CommunityForum() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Forum</Text>
      <Text>Coming soon: community forum!</Text>
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
