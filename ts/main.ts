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

const findNameFilm = (string:string):boolean => {
  let isThereOrNot: boolean = false;
  for (let i = 0; i < movies.length; i++) {
    string = string.toLowerCase();
    let filmName:string = (movies[i].name);
    filmName = filmName.toLowerCase()
    if (string === filmName) {
      isThereOrNot = true;
      break;
    }
  }
  return isThereOrNot;
};
