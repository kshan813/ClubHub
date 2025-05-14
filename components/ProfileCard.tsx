import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {InfoSection} from './InfoSection';
import { Tag } from './Tag'; // ✅ named import

type ProfileProps = {
  name: string;
  email: string;
  major: string;
  grade: string;
  pronouns: string;
  image: any;
  interests: { label: string; color: string }[];
  isPublic: boolean;
  onToggle: () => void;
};

const ProfileCard: React.FC<ProfileProps> = ({
  name, email, major, grade, pronouns, image, interests,
  isPublic, onToggle
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>{isPublic ? 'Public' : 'Private'}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isPublic ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onToggle}
          value={isPublic}
        />
      </View>

      <Text style={styles.title}>Profile</Text>
      <Image source={image} style={styles.photoCircle} />

      <View style={styles.contentWrapper}>
        <InfoSection label="Name" value={name} />
        <InfoSection label="Email" value={email} />
        <View style={styles.row}>
          <InfoSection label="Major" value={major} width="48%" />
          <InfoSection label="Grade" value={grade} width="48%" />
        </View>
        <InfoSection label="Pronouns" value={pronouns} width="45%" />

        <View style={styles.section}>
          <Text style={styles.label}>Interests</Text>
          <View style={styles.tagContainer}>
            {interests.map((item, index) => (
              <Tag key={index} text={item.label} backgroundColor={item.color} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CADCE8',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  toggleContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  toggleLabel: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  photoCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconLabel: {
    marginLeft: 5,
    color: '#7393b3',
    fontSize: 16,
    fontWeight: '600',
  },
  contentWrapper: {
    width: '100%',
  },
  section: {
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ProfileCard;
