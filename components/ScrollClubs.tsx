import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View} from 'react-native';

interface HorizontalButtonListProps {
  sectionTitle: string;
  buttonData: string[];
  onClick: (item: string) => void; 
}

const HorizontalButtonList: React.FC<HorizontalButtonListProps> = ({ sectionTitle, buttonData, onClick }) => {
  const handlePress = (item: string) => {
    onClick(item);
  };

  return (
    <View>
    <Text style={styles.sectionTitle}>{sectionTitle}</Text>
    <FlatList
      data={buttonData} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ paddingHorizontal: 10, marginTop: 5 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.button,
          ]}
          onPress={() => handlePress(item)}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    height: 129,
    width: 168,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFDFD'
  },
  buttonText: {
    color: '#1E1E1E',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginTop: 15,
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 10
  },
});

export default HorizontalButtonList;
