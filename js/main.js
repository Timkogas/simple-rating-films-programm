"use strict";
const movies = [
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
];
const findNameFilm = (string) => {
    let isThereOrNot = false;
    for (let i = 0; i < movies.length; i++) {
        string = string.toLowerCase();
        let filmName = (movies[i].name);
        filmName = filmName.toLowerCase();
        if (string === filmName) {
            isThereOrNot = true;
            break;
        }
    }
    return isThereOrNot;
};
//# sourceMappingURL=main.js.map