import { Layout } from "@react-navigation/bottom-tabs/lib/typescript/commonjs/src/types";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  LayoutChangeEvent,
} from "react-native";
import { Searchbar } from "react-native-paper";
import HorizontalButtonList from "./../../components/ScrollClubs";

export default function TabThreeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSelected, setSearchSelected] = useState(false);
  const [searchbarLayout, setSearchbarLayout] = useState<{
    y: number;
    height: number;
  } | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleButtonClick = (item: string) => {
    console.log(`Button clicked: ${item}`);
    Keyboard.dismiss();
  };

  const handleSearchFocus = () => {
    console.log("Search bar in focus");
    setSearchSelected(true);
  };

  const handleSearchBlur = () => {
    console.log("Search bar out of focus");
    setSearchSelected(false);
  };

  const handleSearchLayout = (event: LayoutChangeEvent) => {
    const { y, height } = event.nativeEvent.layout;
    setSearchbarLayout({ y, height });
  };

  const addSelectedTag = (word: string) => {
    console.log(word);
    setSelectedTags((prev) => (prev.includes(word) ? prev : [...prev, word]));
  };

  const removeTag = (word: string) => {
    console.log(word);
    setSelectedTags((prev) => prev.filter((tag) => tag !== word));
  };

  const searchDropDownHeight = searchbarLayout
    ? searchbarLayout.y - searchbarLayout.height / 2
    : 0;

  const BusinessButtons = [
    "The Bruin Group",
    "Bruin Consulting",
    "Alpha Kappa Psi",
    "Sigma Eta Pi",
    "Bruin Asset Management",
  ];
  const TechButtons = ["ACM-W", "UPE", "Dev X", "LAHacks", "Bruin AI"];
  const AthleticsButtons = [
    "Bruin Run",
    "Women's Club Soccer",
    "Mens's Club Lacrosse",
    "Women's Club Waterpolo",
    "Olympic Weightlifting",
  ];

  const tags = [
    "Business",
    "Engineering",
    "Chemistry",
    "Computer Science",
    "Biology",
    "Writing",
    "Sports",
    "Music",
    "Art",
    "Neuroscience",
  ];

  const colors = ["#FFD700", "#87CEEB", "#FF69B4", "#98FB98", "#FFA07A"];

  const styles = StyleSheet.create({
    tagStyle: {
      paddingHorizontal: 8,
      paddingVertical: 1,
      marginVertical: 3,
      marginHorizontal: 4,
      borderRadius: 25,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, paddingTop: "15%", backgroundColor: "#CADCE8" }}>
        <Searchbar
          style={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#FDFDFD",
          }}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          onLayout={handleSearchLayout}
        />
        {searchSelected && (
          <View>
            <View
              style={{
                top: searchDropDownHeight,
                width: "90%",
                backgroundColor: "#FDFDFD",
                alignSelf: "center",
                paddingTop: searchDropDownHeight * -1,
                paddingHorizontal: 20,
                zIndex: -1,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {selectedTags.map((word, index) => (
                <TouchableOpacity
                  style={[
                    styles.tagStyle,
                    {
                      backgroundColor: colors[index % colors.length],
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    },
                  ]}
                  key={index}
                  onPress={() => removeTag(word)}
                >
                  <Text key={index}>{word} </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderStyle: "solid",
                      borderRadius: 25,
                      height: 12,
                      width: 11,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11,
                        lineHeight: 11,
                        textAlign: "center",
                      }}
                    >
                      x
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <View
              style={{
                top: searchDropDownHeight,
                width: "90%",
                backgroundColor: "#FDFDFD",
                alignSelf: "center",
                paddingTop: 4,
                paddingBottom: 14,
                paddingHorizontal: 20,
                zIndex: -1,
                borderBottomLeftRadius: 28,
                borderBottomRightRadius: 28,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {tags.map((word, index) => (
                <Text
                  key={index}
                  style={[
                    styles.tagStyle,
                    { backgroundColor: colors[index % colors.length] },
                  ]}
                  onPress={() => addSelectedTag(word)}
                >
                  {word}
                </Text>
              ))}
            </View>
          </View>
        )}
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#1E1E1E",
            marginTop: 15,
            textAlign: "left",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          Explore
        </Text>
        <ScrollView>
          <HorizontalButtonList
            sectionTitle="Business"
            buttonData={BusinessButtons}
            onClick={handleButtonClick}
          />
          <HorizontalButtonList
            sectionTitle="Tech"
            buttonData={TechButtons}
            onClick={handleButtonClick}
          />
          <HorizontalButtonList
            sectionTitle="Athletics"
            buttonData={AthleticsButtons}
            onClick={handleButtonClick}
          />
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
