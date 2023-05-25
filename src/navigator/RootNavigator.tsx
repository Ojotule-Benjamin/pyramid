import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HelpAndSupportScreen from "../screens/HelpAndSupportScreen";
import ViewAllQuestions from "../screens/ViewAllQuestions";

const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
  Main: undefined;
  ViewAllQuestions: undefined;
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
      }}
    >
      <RootStack.Screen name="Main" component={HelpAndSupportScreen} />
      <RootStack.Screen name="ViewAllQuestions" component={ViewAllQuestions} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
