import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function TabFourScreen() {
  const [clubData, setClubData] = useState<any>(null);

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const clubsCollectionRef = collection(db, "clubs");
        const querySnapshot = await getDocs(clubsCollectionRef);
        // const docRef = doc(db, "clubs", "CfL2RFYWH3V4UMIblCoN");
        // const docSnap = await getDoc(docRef);

        const clubsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClubData(clubsData);

        // if (docSnap.exists()) {
        //   console.log("Document data:", docSnap.data());
        //   setClubData(docSnap.data());
        //   console.log(docSnap.data());
        // } else {
        //   console.log("No such document!");
        // }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchClub();
  }, []); // empty deps = run once on mount

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#CADCE8",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          marginTop: 100,
          alignSelf: "left",
          marginLeft: 30,
          fontWeight: "bold",
        }}
      >
        Favorites
      </Text>
      {clubData ? (
        <ScrollView style={{ marginTop: 30 }}>
          {clubData.map((club: any) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "70%",
                gap: 20,
                marginLeft: 50,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  marginBottom: 14,
                }}
              ></View>
              <View
                key={club.id}
                style={{
                  marginBottom: 20,
                  borderColor: "white",
                  borderStyle: "dashed",
                  borderWidth: 2,
                  padding: 10,
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {club.name}
                </Text>
                <Text>{club.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
