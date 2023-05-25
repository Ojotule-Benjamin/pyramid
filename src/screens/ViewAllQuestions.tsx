import { StyleSheet, SafeAreaView, Platform } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import Header from "../components/Header";

const ViewAllQuestions = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

export default ViewAllQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});
