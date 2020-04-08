import React, {useState} from 'react'
import { TextInput, View, StyleSheet } from "react-native"
import MovieBrowser from "../react-native/MovieBrowser"


// Red
const red = "#DC3333"

const SearchScreen = ({ navigation }) => {
  // Search Input
  const [search, setSearch] = useState("")

  const handleSearchChange = search => {
    setSearch(search)
  }

  return (
    <View style={styles.container}>
        <TextInput 
          value={search}
          placeholder="Browse by movie, series, episode..."
          onChangeText={handleSearchChange}
          style={styles.searchBar}
        />
        
        <MovieBrowser 
          onSelectMovie={(movie) => {
            navigation.navigate("Details", {
              id: movie.imdbID,
              title: movie.Title,
            })
          }}
          search={search}
        />
    </View>
  )
}

// Header Bar
SearchScreen.navigationOptions = () => ({
    title: "Search",
    headerTintColor: red,
})

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    minWidth: 100,
    paddingHorizontal: 5,
  },
  searchBar: {
    borderColor: red,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});


export default SearchScreen