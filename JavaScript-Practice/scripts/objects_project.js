/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function(){
        while(true){
            personalMovieDB.count = +prompt("How many movies did you watch?","");
            if(!isNaN(personalMovieDB.count)){
                break;
            }
        }
    },
    personalLevel: function(){
        if(personalMovieDB.count<10){
            alert("U watched not so many movies");
        } else if(personalMovieDB.count<=30){
            alert("You are movie fan");
        } else if(personalMovieDB.count>30){
            alert("You are a loser lol");
        } else {
            alert("Wrong number");
        }
    },
    watchedMovies: function(){
        let i = 0;
        while(i<personalMovieDB.count){
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
    },
    showMyDB: function(){
        if(!personalMovieDB.private){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        let i = 0;
        while(true){
            const genre = prompt("which genre you like?");
            if(genre!=='' && genre!==null){
                personalMovieDB.genres.push(genre);
                i++;
                if(i==3){
                    break;
                }
            }
        }
        personalMovieDB.genres.forEach((item,i)=>console.log(`#${i+1}: ${item}`));
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }

        console.log(personalMovieDB.private);
    }
};


//console.log(personalMovieDB.toggleVisibleMyDB());
