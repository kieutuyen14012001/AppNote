import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ setSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm..."
        onChangeText={text => setSearch(text)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={() => setSearch('')}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  searchButton: {
    padding: 10,
  },
});

export default SearchBar;
