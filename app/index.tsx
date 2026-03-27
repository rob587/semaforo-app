import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function Index() {
  const [changeColor, setChangeColor] = useState("rosso");

  return (
    <View style={styles.contenitore}>
      <View style={styles.box}>
        <Pressable onPress={() => setChangeColor("rosso")}>
          <View
            style={[
              styles.cerchio,
              { backgroundColor: changeColor === "rosso" ? "red" : "grey" },
            ]}
          ></View>
        </Pressable>
        <Pressable onPress={() => setChangeColor("giallo")}>
          <View
            style={[
              styles.cerchio,
              { backgroundColor: changeColor === "giallo" ? "yellow" : "grey" },
            ]}
          ></View>
        </Pressable>
        <Pressable onPress={() => setChangeColor("verde")}>
          <View
            style={[
              styles.cerchio,
              { backgroundColor: changeColor === "verde" ? "green" : "grey" },
            ]}
          ></View>
        </Pressable>
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
    borderRadius: 20,
    backgroundColor: "#2a2a2a",
    height: 320,
    justifyContent: "center",
    alignItems: "center",
  },

  cerchio: {
    borderRadius: 28,
    height: 56,
    width: 56,
    margin: 20,
  },
});
