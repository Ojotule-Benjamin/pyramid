import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { DataItem, data } from "../../data";
import Card from "../components/Card";
import search from "../assets/img/search.png";

const HelpAndSupportScreen: React.FC = () => {
  // Render the category item
  const renderCategoryItem = ({ item }: { item: DataItem }) => {
    const getBackgroundColor = (id: number) => {
      if (item.id === 1) return colors.gettingStarted;
      if (item.id === 2) return colors.invest;
      if (item.id === 3) return colors.payment;
    };
    const background = getBackgroundColor(item.id);

    return (
      <View
        style={[{ backgroundColor: background }, styles.helpCenterCategory]}
      >
        <Image source={item.img} style={styles.itemImg} />
        <View style={styles.itemGroup}>
          <Text style={styles.itemQuestion}>{item.question}</Text>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.helpContainer}>
      <View style={styles.helpCenterWrapper}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
        <Text style={styles.helpCenterText}>Help center</Text>
        <Feather name="search" size={24} color="black" />
      </View>

      <Text style={styles.helpCenterTitle}>How can we help you?</Text>

      <View style={styles.helpCenterKeyword}>
        <Image source={search} />
        <TextInput
          style={styles.helpCenterSearch}
          placeholder="Enter your Keyword"
        />
      </View>

      {/* category list */}
      <View style={{ marginBottom: 30 }}>
        <FlatList
          data={data}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/*questions cards */}
      <Card />

      {/* <View>
        <View style={styles.helpCenterQuestions}>
          <Text style={styles.helpCenterText}>Top Questions</Text>
          <Text style={styles.helpCenterText2}>View all</Text>
        </View>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
        >
          {topQuestions.map(({ id, title, details }: TopQuestionItem) => (
            <View
              style={[
                selected === id ? styles.cardContainer : styles.cardNotSelected,
              ]}
              key={id}
            >
              <View style={styles.cardTop}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Pressable onPress={() => setSelected(id)}>
                  {selected === id ? (
                    <Feather name="minus" size={24} color="#DF1525" />
                  ) : (
                    <Feather name="plus" size={24} color="#DF1525" />
                  )}
                </Pressable>
              </View>
              {selected === id ? (
                <Text style={styles.cardDetails}>{details}</Text>
              ) : null}
            </View>
          ))}
        </ScrollView>
      </View> */}
    </SafeAreaView>
  );
};

export default HelpAndSupportScreen;

const styles = StyleSheet.create({
  helpContainer: {
    flex: 1,
    width: "100%",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
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
  helpCenterTitle: {
    marginTop: 31,
    fontFamily: "poppinsSemiBold",
    fontSize: 22,
    color: colors.textDark,
    textAlign: "center",
    paddingHorizontal: 24,
  },
  helpCenterKeyword: {
    marginTop: 25,
    paddingLeft: 18,
    marginHorizontal: 24,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  helpCenterSearch: {
    paddingHorizontal: 17,
    fontFamily: "RobotoRegular",
    fontWeight: "400",
    color: colors.textLight,
    fontSize: 14,
  },
  helpCenterCategory: {
    flexDirection: "column",
    marginTop: 30,
    marginLeft: 16,
    width: 144,
    height: 116,
    borderRadius: 8,
    paddingLeft: 16,
    paddingTop: 16,
  },
  itemImg: {
    width: 20,
    height: 18,
    resizeMode: "cover",
  },
  itemGroup: {
    marginTop: 16,
  },
  itemQuestion: {
    fontFamily: "RobotoRegular",
    fontSize: 14,
    fontWeight: "400",
    color: colors.textLightGray,
  },
  itemTitle: {
    fontFamily: "poppinsSemiBold",
    fontSize: 14,
    fontWeight: "600",
    color: colors.textDark,
  },
  helpCenterQuestions: {
    marginHorizontal: 24,
    marginBottom: 16,
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  helpCenterText: {
    fontFamily: "poppinsSemiBold",
    fontSize: 16,
    fontWeight: "600",
    color: colors.textDark,
  },
  helpCenterText2: {
    fontFamily: "poppinsSemiBold",
    fontSize: 14,
    fontWeight: "700",
    color: colors.textRed,
  },
  cardContainer: {
    height: 139,
    marginHorizontal: 24,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
  },
  cardNotSelected: {
    height: 79,
    marginHorizontal: 24,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  cardTitle: {
    width: 250,
    fontFamily: "poppinsSemiBold",
    fontSize: 14,
    fontWeight: "600",
    color: colors.textDark,
  },
  cardDetails: {
    width: 250,
    fontFamily: "RobotoRegular",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "justify",
    color: colors.textDark,
  },
});