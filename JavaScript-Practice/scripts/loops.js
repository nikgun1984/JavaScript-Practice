/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt("How many movies did you watch?", "");

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

console.log(personalMovieDB);
