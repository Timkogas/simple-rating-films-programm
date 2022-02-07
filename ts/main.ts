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

const findNameFilm = (filmNameToFind:string):boolean => {
  let isThereOrNot: boolean = false;
  for (let i = 0; i < movies.length; i++) {
    filmNameToFind = filmNameToFind.toLowerCase();
    let filmNameInArray:string = (movies[i].name);
    filmNameInArray = filmNameInArray.toLowerCase()
    if (filmNameToFind === filmNameInArray) {
      isThereOrNot = true;
      break;
    }
  }
  return isThereOrNot;
};

const addFilm = (filmName:string):void => {
  let check:boolean = findNameFilm(filmName);
  if (!check) {
    let MovieObj:Movie = {
      'name': filmName,
      'ratings': {}
    }
    movies.push(MovieObj);
  } else {
    console.log("Фильм с таким названием уже есть!");
  }
};

  
