import React, { useState, useEffect } from 'react'
import { Text, ScrollView, Image, StyleSheet, Dimensions, View } from "react-native"
import { movieDetails } from '../api'


const MoviesDetailsScreen = ({ route }) => {
  const { id }  = route.params
  const [movie, setMovie] = useState({})

  const getMovieDetails = async () => {
    const result = await movieDetails(id) 
    setMovie(result)
  }

  // Component did Update
  useEffect(() => {
    getMovieDetails()
  }, [id])

  if (movie) {
    const width = Dimensions.get("screen").width * .9
    
    return (
      <ScrollView style={styles.container}>
        <Image
          style={[styles.image, styles.division]} 
          source={{uri: movie.Poster}}
          resizeMode={'cover'}
        />
        <Text style={[styles.title, styles.division, styles.whiteFont]}>{movie.Title}</Text>
        <Text style={styles.whiteFont}>{movie.Year + " " + "(" + movie.Type + ")"}</Text>
        <Text style={[styles.division, styles.whiteFont]}>{movie.Rated + ", " + movie.Runtime}</Text>
        <Text style={[styles.division, styles.whiteFont]}>{movie.Plot}</Text>
        <View style={styles.barSection}>
        {(movie.Ratings) ? 
        movie.Ratings.map(rating => (
          <View key={rating.Source}>
            <Text style={[styles.division, styles.whiteFont]}>{rating.Source + " " + "(" + rating.Value + ")"}</Text>
              <View style={[styles.rantingBars, {width: eval(rating.Value.replace("%", "/100")) * width},]}></View>
            </View>
        )) :
        <View />
        }
        </View>
        <Text style={styles.whiteFont}>Director:{" " + movie.Director}</Text>
        <Text style={styles.whiteFont}>Writer:{" " + movie.Writer}</Text>
        <Text style={styles.whiteFont}>Genre:{" " + movie.Genre}</Text>
        <Text style={styles.whiteFont}>Actors:{" " + movie.Actors}</Text>
        <Text style={styles.whiteFont}>BoxOffice:{" " + movie.BoxOffice}</Text>
        <Text style={styles.whiteFont}>Production:{" " + movie.Production}</Text>
        <Text style={styles.whiteFont}>Country:{" " + movie.Country}</Text>
        <Text style={[styles.division, styles.whiteFont]}>Language:{" " + movie.Language}</Text>
      </ScrollView>
    )
  } else {
      return (
        <View style={styles.noavailable}> 
          <Text style={styles.noavailableText}>No available details</Text>
        </View>
      )
  }
}

// Red
const red = "#DC3333"

// Header Bar
MoviesDetailsScreen.navigationOptions = ({ route }) => {
  const { title }  = route.params
  return ({
    title: title,
    headerTintColor: red,
    headerTitleStyle: {paddingLeft: 20, paddingRight: 20},
    headerBackTitle: null,
    headerTitleStyle: {
      marginHorizontal: 70,
    }
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: red,
    padding: 10,
  },
  image: {
    alignSelf: "stretch",
    minHeight: 480,
    borderWidth: 3,
    borderColor: "black"
  },
  title: {
    fontSize: 20,
    flexGrow: 1,
    flex: 1,
    fontWeight: "bold",
  },
  division: {
    marginBottom: 10,
  },
  noavailable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: red,
  },
  noavailableText: {
    fontSize: 22,
    color: "white",
  },
  whiteFont: {
    color: "white",
  },
  rantingBars: {   
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 20,
    paddingVertical: 5,
    borderRadius: 20,
  }
});


export default MoviesDetailsScreen