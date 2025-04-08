import React from "react";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function TabTwoScreen() {
  const [clubData, setClubData] = useState<any>(null);

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const docRef = doc(db, "clubs", "CfL2RFYWH3V4UMIblCoN");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setClubData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchClub();
  }, []); // empty deps = run once on mount

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Explore Screen</Text>
      {clubData ? (
        <View>
          {Object.entries(clubData).map(([key, value]) => (
            <Text key={key} style={{ marginBottom: 5 }}>
              <Text style={{ fontWeight: "bold" }}>{key}: </Text>
              {value?.toString()}
            </Text>
          ))}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
