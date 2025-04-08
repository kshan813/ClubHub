import React from 'react';
import { View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function TabThreeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
}
