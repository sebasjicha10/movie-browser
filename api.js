let key = 0

const addKey = movie => {
  key++
  return {
      ...movie,
      keyID: key.toString()
  }
}

export const fetchMovies = async (search) => {
  const input = JSON.stringify(search)
  const response = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=ac603bfd`)
  const { Search } = await response.json()
  // Handle the update of results
  if (Search) {
      key = 0
      return Search.map(addKey)
  } else {
      return null
  }
}

export const movieDetails = async (id) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=ac603bfd`)
    const movieInfo = await response.json()
    return movieInfo
}
