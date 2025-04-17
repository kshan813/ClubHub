import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './../../components/ProfileCard';

const TabFiveScreen = () => {
  const [isPublic, setIsPublic] = useState(false);

  const profile = {
    name: 'Anna P',
    email: 'abcde@gmail.com',
    major: 'Business Economics',
    grade: '2028',
    pronouns: 'she/her',
    image: require('../../assets/images/profilepic.png'), 
    interests: [
      { label: 'Consulting', color: '#FFB6C1' },
      { label: 'Business', color: '#ADD8E6' },
      { label: 'Computer Science', color: '#90EE90' },
    ],
  };

  return (
    <View style={styles.wrapper}>
      <ProfileCard
        {...profile}
        isPublic={isPublic}
        onToggle={() => setIsPublic(prev => !prev)}
        onEdit={() => console.log('Edit Profile Pressed')}
      />
    </View>
  );
};

export default TabFiveScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
