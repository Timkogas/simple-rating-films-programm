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
const findNameFilm = (filmNameToFind) => {
    let isThereOrNot = -1;
    for (let i = 0; i < movies.length; i++) {
        filmNameToFind = filmNameToFind.toLowerCase();
        let filmNameInArray = (movies[i].name);
        filmNameInArray = filmNameInArray.toLowerCase();
        if (filmNameToFind === filmNameInArray) {
            isThereOrNot = i;
            break;
        }
    }
    return isThereOrNot;
};
const addFilm = (filmName) => {
    let check = findNameFilm(filmName);
    if (check === -1) {
        let MovieObj = {
            'name': filmName,
            'ratings': {}
        };
        movies.push(MovieObj);
    }
    else {
        console.log("Фильм с таким названием уже есть!");
    }
};
const deleteFilm = (filmName) => {
    let check = findNameFilm(filmName);
    if (check !== -1) {
        movies.splice(check, 1);
    }
    else {
        console.log("Такого фильма не существует!");
    }
};
const listFilms = () => {
    let sum;
    let userRatings;
    let oneUserRating;
    for (let i = 0; i < movies.length; i++) {
        let checkRatings = Object.keys(movies[i].ratings);
        if (checkRatings.length !== 0) {
            sum = 0;
            userRatings = Object.values(movies[i].ratings);
            for (let i = 0; i < userRatings.length; i++) {
                oneUserRating = userRatings[i];
                sum += oneUserRating;
            }
            console.log("====================\nНазвание фильма: " + movies[i].name + "\nСредние оценки фильма: " + (sum / checkRatings.length).toFixed(1) + "\n====================");
        }
        else {
            console.log("====================\nНазвание фильма: " + movies[i].name + "\nЭтот фильм еще не оценивался\n====================");
        }
    }
};
const rateFilm = (filmName) => {
    while (true) {
        let check = findNameFilm(filmName);
        if (check !== -1) {
            let userName = prompt("Введите ваше имя:");
            if (userName === null) {
                break;
            }
            while (true) {
                let userRate = prompt("Введите вашу оценку от 0 до 10");
                if (userRate === null) {
                    break;
                }
                let userRateNumber = parseInt(userRate);
                if (userRateNumber >= 0 || userRateNumber <= 10) {
                    movies[check].ratings[userName] = userRateNumber;
                    break;
                }
                else {
                    console.log("Введите число от 0 до 10, пожалуйста");
                }
            }
        }
        else {
            console.log("Этого фильма нету в списке");
            break;
        }
        break;
    }
};
const findFilm = (filmName) => {
    let check = findNameFilm(filmName);
    if (check !== -1) {
        let sum;
        let userRatings;
        let oneUserRating;
        let oneUserName;
        let checkRatings = Object.keys(movies[check].ratings);
        if (checkRatings.length !== 0) {
            sum = 0;
            userRatings = Object.values(movies[check].ratings);
            console.log("====================\nНазвание фильма: " + movies[check].name);
            for (let i = 0; i < userRatings.length; i++) {
                oneUserRating = userRatings[i];
                oneUserName = checkRatings[i];
                sum += oneUserRating;
                console.log("Оценка пользователя " + oneUserName + " : " + oneUserRating);
            }
            console.log("Средняя оценка пользователей: " + (sum / checkRatings.length).toFixed(1) + "\n====================");
        }
        else {
            console.log("====================\nНазвание фильма: " + movies[check].name + "\nЭтот фильм еще не оценивался\n====================");
        }
    }
    else {
        console.log("Этого фильма нету в списке!");
    }
};
let userChoise;
let userFilm;
while (true) {
    userChoise = prompt("Выберите действие:\nadd - добавить фильм с указанным названием\ndelete - удалить фильм с указанным названием.\nlist - вывести список фильмов в виде таблицы\nrate - добавить оценку к фильму по названию.\nfind - найти фильм по названию и показать его название и все оценки в виде таблицы");
    if (userChoise === null) {
        console.log("Выход из программы");
        break;
    }
    if (userChoise === "add") {
        userFilm = prompt("Введите название фильма");
        if (userFilm === null) {
            console.log("Выход из программы");
            break;
        }
        addFilm(userFilm);
    }
    else if (userChoise === "delete") {
        userFilm = prompt("Введите название фильма");
        if (userFilm === null) {
            console.log("Выход из программы");
            break;
        }
        deleteFilm(userFilm);
    }
    else if (userChoise === "list") {
        listFilms();
    }
    else if (userChoise === "rate") {
        userFilm = prompt("Введите название фильма");
        if (userFilm === null) {
            console.log("Выход из программы");
            break;
        }
        rateFilm(userFilm);
    }
    else if (userChoise === "find") {
        userFilm = prompt("Введите название фильма");
        if (userFilm === null) {
            console.log("Выход из программы");
            break;
        }
        findFilm(userFilm);
    }
    else {
        console.log("Напишите нужную команду!");
    }
}
//# sourceMappingURL=main.js.map