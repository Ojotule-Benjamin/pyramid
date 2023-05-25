import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import colors from "./src/assets/colors/colors";
import HelpAndSupportScreen from "./src/screens/HelpAndSupportScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigator/RootNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    poppinsSemiBold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    RobotoRegular: require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
