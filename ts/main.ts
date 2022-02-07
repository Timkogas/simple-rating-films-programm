interface Movie {
  name: string
  ratings: {
    [key:string]: number
  }
}

const movies: Movie[] = [
{
  'name': 'Interstellar',
  'ratings': {
    'John': 10,
    'Jack': 3
  }
},
{
  'name': 'Avengers: Infinity War',
  'ratings': {
    'Jack': 9,
    'Jane': 10
  }
}
]
