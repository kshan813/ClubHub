import React from 'react';
import { View, Text, StyleSheet, DimensionValue } from 'react-native';

type Props = {
  label: string;
  value: string;
  width?: DimensionValue;
};

export const InfoSection: React.FC<Props> = ({ label, value, width = '100%' }) => (
  <View style={[styles.section, { width }]}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.bar}>
      <Text style={styles.barText}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  bar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  barText: {
    fontSize: 14,
  },
});
