/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt("How many movies did you watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const watchedMovie = prompt("One of the last watched movies", ""),
      rating = prompt("Your rating", ""),
      watchedMovie1 = prompt("One of the last watched movies", ""),
      rating1 = prompt("Your rating", ""),
      watchedMovie2 = prompt("One of the last watched movies", ""),
      rating2 = prompt("Your rating", ""),
      watchedMovie3 = prompt("One of the last watched movies", ""),
      rating3 = prompt("Your rating", "");

personalMovieDB.movies[watchedMovie] = rating;
personalMovieDB.movies[watchedMovie1] = rating1;
personalMovieDB.movies[watchedMovie2] = rating2;
personalMovieDB.movies[watchedMovie3] = rating3;

console.log(personalMovieDB);
