import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
  backgroundColor: string;
};

export const Tag: React.FC<Props> = ({ text, backgroundColor }) => (
  <View style={[styles.tag, { backgroundColor }]}>
    <Text style={styles.tagText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  tag: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
});


