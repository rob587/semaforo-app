import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.contenitore}>
      <View style={styles.box}>
        <Text style={styles.circles}></Text>
        <Text style={styles.circle2}></Text>
        <Text style={styles.circle3}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    height: 20,
    width: 100,
    borderRadius: 20,
    backgroundColor: "#2a2a2a",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  circles: {
    borderRadius: 28,
    borderStyle: "solid",

    borderWidth: 2, // ← senza questo il bordo non appare
    backgroundColor: "red", // ← senza questo è trasparente
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  circle2: {
    borderRadius: 28,
    borderStyle: "solid",
    borderWidth: 2, // ← senza questo il bordo non appare
    backgroundColor: "grey", // ← senza questo è trasparente
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  circle3: {
    borderRadius: 28,
    borderStyle: "solid",

    borderWidth: 2, // ← senza questo il bordo non appare
    backgroundColor: "grey", // ← senza questo è trasparente
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
