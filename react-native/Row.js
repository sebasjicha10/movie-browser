import React from 'react'
import { Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native'


const Row = props => (
  <TouchableOpacity
    onPress={() => {
      props.onSelectMovie(props)
    }}
  >
      <View style={styles.row}>
        <Image
          style={{width: 130, height: 175, borderRadius: 10,}} 
          source={{uri: props.Poster}}
        />
        <View style={styles.text}>
          <Text style={styles.title}>{props.Title}</Text>
          <View style={styles.year}>
            <Text>{props.Year + " "}</Text>
            <Text>({props.Type})</Text>
          </View>
        </View>
      </View>
  </TouchableOpacity>
)

// Red
const red = "#DC3333"

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  text: {
    flexGrow: 1,
    flex: 1,
    marginLeft: 5,
  },
  year: {
    flexDirection: "row",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    flexWrap: "wrap",
  }

});


export default Row 