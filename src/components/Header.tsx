import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.helpCenterWrapper}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </Pressable>
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
