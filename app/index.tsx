import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.contenitore}>
      <View style={styles.box}>
        <Text>ciao</Text>
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
    height: 0,
    width: 150,
    borderRadius: 20,
    backgroundColor: "#2a2a2a",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
