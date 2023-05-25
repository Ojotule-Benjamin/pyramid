import { StyleSheet, Text, ScrollView, Pressable, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { topQuestions, data, DataItem, TopQuestionItem } from "../../data";

const Card = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <View>
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
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
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
    width: 270,
    fontFamily: "RobotoRegular",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "justify",
    color: colors.textLightGray,
  },
});
