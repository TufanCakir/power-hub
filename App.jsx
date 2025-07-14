import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={["#000", "#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 2 }}
        style={styles.linearGradient}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
