import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NoteList = ({ notesList }) => {
  return (
    <FlatList
      data={notesList}
      renderItem={({ item }) => (
        <View style={styles.noteContainer}>
          <Text style={styles.noteTitle}>{item.title}</Text>
          <Text style={styles.noteContent}>{item.content}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noteContent: {
    fontSize: 16,
  },
});

export default NoteList;
