import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import SearchBar from './components/SearchBar';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [search, setSearch] = useState('');
  const [notesList, setNotesList] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    if (search === '') {
      setShowSearchResults(false);
      setFilteredNotes([]);
    } else {
      setShowSearchResults(true);
      const filtered = notesList.filter(
        note => note.title.toLowerCase().includes(search.toLowerCase()) ||
                note.content.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredNotes(filtered);
    }
  }, [search, notesList]);

  const addNote = () => {
    setShowSearchResults(false);
    if (title.trim() !== '' && content.trim() !== '') {
      setNotesList(prevNotesList => [
        ...prevNotesList,
        { key: Math.random().toString(), title: title, content: content }
      ]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ghi Chú</Text>
      <SearchBar setSearch={setSearch} />
      <NoteInput
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        addNote={addNote}
      />
      {showSearchResults && (
        <FlatList
          data={filteredNotes}
          renderItem={({ item }) => (
            <View style={styles.noteContainer}>
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteContent}>{item.content}</Text>
            </View>
          )}
        />
      )}
      {!showSearchResults && (
        <NoteList notesList={notesList} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
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

export default App;
