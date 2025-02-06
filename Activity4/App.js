import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity, textcolor} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const morning = [
  {
    id: 'to do',
    title: '1. Wake up early',
  },
  {
    id: 'to do',
    title: '2. Wash my Face, and brushing teeth',
  },
  {
    id: 'to do',
    title: '3. Make some Exercises',
  },
  {
        id: 'to do',
    title: '4. Make a Breakfast',
  },
   {
        id: 'to do',
    title: '5. Scrolling Facebook',
  },
     {
        id: 'to do',
    title: '6. Playing Games',
  },
     {
        id: 'to do',
    title: '7. Cleaning my Motorcycle',
  },
     {
        id: 'to do',
    title: '8. Watching News ',
  },
];
const afternoon = [
  {
    id: 'to do',
    title: '9. Cooking Foods',
  },
  {
    id: 'to do',
    title: '10. Take a shower',
  },
  {
    id: 'to do',
    title: '11. Go to School',
  },
  {
        id: 'to do',
    title: '12. Lesining to Professor of teaching',
  },
   {
        id: 'to do',
    title: '13. Do the Activity',
  },
     {
        id: 'to do',
    title: '14. Breaktime, light afternoon meal,',
  },
  {
        id: 'to do',
    title: '15. Back to the school',
  },
  {
        id: 'to do',
    title: '16. Review for the quiz',
  },
];

const evening = [
  {
    id: 'to do',
    title: '17. Take the Notes',
  },
  {
    id: 'to do',
    title: '18. Sideline to Lalamove',
  },
  {
    id: 'to do',
    title: '19. Deliver the Parcel',
  },
  {
        id: 'to do',
    title: '20. Go to the Home',
  },
   {
        id: 'to do',
    title: '21. Preparing Dinner',
  },
    {
        id: 'to do',
    title: '22. Watching News',
  },
    {
        id: 'to do',
    title: '23. Take the evening Bath',
  },
    {
        id: 'to do',
    title: '24. Praying to God and Worship',
  },
    {
        id: 'to do',
    title: '25. Go to Sleep',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <TouchableOpacity><Text style={styles.title}>{title}</Text></TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text       style={{
          borderColor: 'black',
          borderWidth: 3,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Morning </Text>
      <FlatList
        data={morning}
        renderItem={({item}) => <Item title={item.title}  />}
        keyExtractor={item => item.id}
      />
    <Text
    style={{
          borderColor: 'black',
          borderWidth: 3,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Afternoon </Text>

      <FlatList
        data={afternoon}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text
      style={{
          borderColor: 'black',
          borderWidth: 3,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Evening </Text>

      <FlatList
        data={evening}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'aqua',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
  },
 
});

export default App;