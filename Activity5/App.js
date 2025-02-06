import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const morning = [
  { id: '1', 
  title: '1. Wake up early' },
  { id: '2', 
  title: '2. Wash my Face, and brushing teeth' },
  { id: '3', 
  title: '3. Make some Exercises' },
  { id: '4', 
  title: '4. Make a Breakfast' },
  { id: '5', 
  title: '5. Scrolling Facebook' },
  { id: '6', 
  title: '6. Playing Games' },
  { id: '7', 
  title: '7. Cleaning my Motorcycle' },
  { id: '8', 
  title: '8. Watching News' },
];

const afternoon = [
  { id: '9', 
  title: '9. Cooking Foods' },
  { id: '10', 
  title: '10. Take a shower' },
  { id: '11', 
  title: '11. Go to School' },
  { id: '12', 
  title: '12. Listening to Professor' },
  { id: '13', 
  title: '13. Do the Activity' },
  { id: '14', 
  title: '14. Breaktime, light afternoon meal' },
  { id: '15', 
  title: '15. Back to the school' },
  { id: '16', 
  title: '16. Review for the quiz' },
];

const evening = [
  { id: '17', 
  title: '17. Take the Notes' },
  { id: '18', 
  title: '18. Sideline to Lalamove' },
  { id: '19', 
  title: '19. Deliver the Parcel' },
  { id: '20', 
  title: '20. Go to the Home' },
  { id: '21', 
  title: '21. Preparing Dinner' },
  { id: '22', 
  title: '22. Watching News' },
  { id: '23', 
  title: '23. Take the evening Bath' },
  { id: '24', 
  title: '24. Praying to God and Worship' },
  { id: '25', 
  title: '25. Go to Sleep' },
];

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#C0C0C0', '#FFFF00', '#008080', '#00FFFF'];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index }) => {
    const isSelected = item.id === selectedId;
    const backgroundColor = isSelected ? 'blue' : colors[index % colors.length];
    const textColor = isSelected ? 'white' : 'black';

    return <Item item={item} onPress={() => setSelectedId(item.id)} backgroundColor={backgroundColor} textColor={textColor} />;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionHeader}>Morning</Text>
        <FlatList data={morning} renderItem={renderItem} keyExtractor={item => item.id} />

        <Text style={styles.sectionHeader}>Afternoon</Text>
        <FlatList data={afternoon} renderItem={renderItem} keyExtractor={item => item.id} />

        <Text style={styles.sectionHeader}>Evening</Text>
        <FlatList data={evening} renderItem={renderItem} keyExtractor={item => item.id} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  sectionHeader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f8f9fa',
    marginVertical: 8,
  },
  item: {
    padding: 20,
    margin: 2,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
