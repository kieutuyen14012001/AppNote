import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NoteInput = ({ title, setTitle, content, setContent, addNote }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Tiêu đề"
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <TextInput
        style={[styles.input, styles.contentInput]}
        placeholder="Nội dung"
        onChangeText={text => setContent(text)}
        value={content}
        multiline
      />
      <Button title="Thêm" onPress={addNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  contentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default NoteInput;
