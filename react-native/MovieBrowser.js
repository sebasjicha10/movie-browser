import React, { useState, useEffect } from 'react'
import { FlatList, View, Button } from "react-native"
import Row from "./Row"
import { fetchMovies } from '../api'


const MovieBrowser = props => {
  const [movies, setMovies] = useState("")
  const search = props.search
  
  const renderItem = ({ item }) => (
      <Row 
        {...item}
        onSelectMovie={(item) => {
          props.onSelectMovie(item)
        }}
      />
  )

  // Component did Update - When the search input changes 
  useEffect(() => {
    updateSearch()
  }, [search])

  const updateSearch = async () => {
    const movieResults = await fetchMovies(search)
    setMovies(movieResults)
  }

  return (
    <View>
    <FlatList 
      data={movies}
      renderItem={renderItem}
      keyExtractor={item => item.keyID}
    />
    </View>
  )

}


export default MovieBrowser