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

const findNameFilm = (filmNameToFind:string):number => {
  let isThereOrNot: number = -1;
  for (let i = 0; i < movies.length; i++) {
    filmNameToFind = filmNameToFind.toLowerCase();
    let filmNameInArray:string = (movies[i].name);
    filmNameInArray = filmNameInArray.toLowerCase()
    if (filmNameToFind === filmNameInArray) {
      isThereOrNot = i;
      break;
    }
  }
  return isThereOrNot;
};

const addFilm = (filmName:string):void => {
  let check:number = findNameFilm(filmName);
  if (check === -1) {
    let MovieObj:Movie = {
      'name': filmName,
      'ratings': {}
    }
    movies.push(MovieObj);
  } else {
    console.log("Фильм с таким названием уже есть!");
  }
};

const deleteFilm = (filmName:string):void => {
  let check:number = findNameFilm(filmName);
  if (check !== -1) {
    movies.splice(check, 1)
  } else {
    console.log("Такого фильма не существует!")
  }
}

  
