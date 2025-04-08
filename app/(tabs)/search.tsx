import React from 'react';
import { View, ScrollView, Text} from 'react-native';
import { Searchbar } from 'react-native-paper';
import HorizontalButtonList from './../../components/ScrollClubs'; 



export default function TabThreeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const handleButtonClick = (item: string) => {
    console.log(`Button clicked: ${item}`);
  };


  const BusinessButtons = ['The Bruin Group', 'Bruin Consulting', 'Alpha Kappa Psi', 'Sigma Eta Pi', 'Bruin Asset Management'];
  const TechButtons = ['ACM-W', 'UPE', 'Dev X', 'LAHacks', 'Bruin AI'];
  const AthleticsButtons = ['Bruin Run', 'Women\'s Club Soccer', 'Mens\'s Club Lacrosse', 'Women\'s Club Waterpolo', 'Olympic Weightlifting'];





  return (
     <View style={{ flex: 1, paddingTop: '15%', backgroundColor: '#CADCE8'}}>
       <Searchbar style={{ width: '90%', alignSelf: 'center', backgroundColor: '#FDFDFD'}}
       placeholder="Search"
       onChangeText={setSearchQuery}
       value={searchQuery}
      />
      <Text style= {{ fontSize: 30,fontWeight: 'bold', color: '#1E1E1E', marginTop: 15, textAlign: 'left', marginLeft: 10, marginRight: 10}}>
        Explore
      </Text>    
      <ScrollView>
        <HorizontalButtonList 
          sectionTitle= "Business"
          buttonData={BusinessButtons}
          onClick={handleButtonClick}
        />
        <HorizontalButtonList 
          sectionTitle= "Tech"
          buttonData={TechButtons}
          onClick={handleButtonClick}
        />
        <HorizontalButtonList 
          sectionTitle= "Athletics"
          buttonData={AthleticsButtons}
          onClick={handleButtonClick}
        />
      </ScrollView>
    </View>
  );
};
