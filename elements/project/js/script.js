/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelectorAll('.promo__adv img'),
      div = document.querySelector('div.promo__bg'),
      genre = div.querySelector('div.promo__genre'),
      items = document.querySelectorAll('li.promo__interactive-item');
      console.log(items);
ads.forEach(item=> item.remove());
genre.textContent = "ДРАМА";
div.style.backgroundImage = "url('./img/bg.jpg')";
//This way
// const {movies} = movieDB;
// movies.sort();

// for(let i=0;i<items.length;i++){
//     items[i].textContent = `${i+1}. ${movies[i]}`;
// }

//OR

const movieList = document.querySelector('ul.promo__interactive-list');

movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((movie,i)=> movieList.innerHTML +=`<li class="promo__interactive-item">${i+1}. ${movie}
<div class="delete"></div></li>`);