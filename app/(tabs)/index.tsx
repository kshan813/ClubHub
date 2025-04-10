import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

interface Event {
  id: string;
  name: string;
  date: string;
}

const temp_test_events: Event[] = [
  { id: '1', name: 'Event 1', date: '2025-04-10' },
  { id: '2', name: 'Event 2', date: '2025-04-15' },
  { id: '3', name: 'Event 3', date: '2025-04-20' },
];

export default function HomeScreen() {
  // Define the renderItem function with appropriate types
  const renderEvent = ({ item }: { item: Event }) => (
    <View style={styles.eventContainer}>
      <Text style={styles.eventText}>{item.name}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.background}>
      <Text style={styles.headerText}>Calendar</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          theme={{
            backgroundColor: '#FDFDFD',
            calendarBackground: '#FDFDFD',
            selectedDayBackgroundColor: '#00adf5',
            todayTextColor: '#00adf5',
            arrowColor: '#00adf5',
            monthTextColor: '#1E1E1E',
            textSectionTitleColor: '#1E1E1E',
          }}
        />
      </View>

      {/* Upcoming Events */}
      <Text style={styles.subHeaderText}>Upcoming Events</Text>

      <FlatList
        data={temp_test_events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
        style={styles.eventsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: '15%',
    backgroundColor: '#CADCE8',
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#1E1E1E',
    fontSize: 16,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginBottom: 10,
    textAlign: 'center',
  },
  calendarContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  calendar: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FDFDFD',
    marginBottom: 20,
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginBottom: 10,
    marginLeft: 10,
  },
  eventsList: {
    marginBottom: 20,
  },
  eventContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  eventText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  eventDate: {
    fontSize: 14,
    color: '#888',
  },
});


/*
import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
        //add club photo here
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

*/