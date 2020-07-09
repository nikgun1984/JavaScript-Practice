/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

while(true){
    numberOfFilms = +prompt("How many movies did you watch?","");
    //console.log(numberOfFilms)
    if(!isNaN(numberOfFilms)){
        break;
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
if(personalMovieDB.count<10){
    alert("U watched not so many movies")
} else if(personalMovieDB.count<=30){
    alert("You are movie fan")
} else if(personalMovieDB.count>30){
    alert("You are a loser lol")
} else {
    alert("Wrong number")
}

let i = 0;
while(i<numberOfFilms){
    if(personalMovieDB.count<=0){
        break;
    }
    const watchedMovie = prompt("One of the last watched movies", "")
    const rating = prompt("Your rating", "");
    if(watchedMovie==="" || rating==="" || watchedMovie.length>50){
        continue;
    }
    personalMovieDB.movies[watchedMovie] = rating;
    i++;
}

function showMyDB(DB){
    if(!DB.private){
        console.log(DB.movies);
    } else {
        //console.log('error');
    }
}

showMyDB(personalMovieDB);

function writeYourGenres(){
    let i = 0;
    while(i<3){
        const genre = prompt("which genre you like?");
        personalMovieDB.genres.push(genre);
        i++;
    }
    console.log(personalMovieDB)
}

writeYourGenres();


