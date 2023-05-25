import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.helpCenterWrapper}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
      <Text style={styles.helpCenterText}>Help center</Text>
      <Feather name="search" size={24} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  helpCenterWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  helpCenterText: {
    fontFamily: "poppinsSemiBold",
    fontWeight: "600",
    fontSize: 22,
    color: colors.textDark,
    textAlign: "center",
  },
});
