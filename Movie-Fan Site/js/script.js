/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


document.addEventListener('DOMContentLoaded',()=>{
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
        items = document.querySelectorAll('li.promo__interactive-item'),
        movieList = document.querySelector('ul.promo__interactive-list');

        //   console.log(items);
    const deleteEl = (arr) => {
        arr.forEach(item=> item.remove());
    }

    deleteEl(ads);
    genre.textContent = "ДРАМА";
    div.style.backgroundImage = "url('./img/bg.jpg')";
    //This way
    // const {movies} = movieDB;
    // movies.sort();

    // for(let i=0;i<items.length;i++){
    //     items[i].textContent = `${i+1}. ${movies[i]}`;
    // }

    //OR
    createMovieList(movieDB.movies, movieList);

    /* Задания на урок:

    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"

    5) Фильмы должны быть отсортированы по алфавиту */

    const form = document.querySelector('form.add'),
        input = form.querySelector('input'),
        checkBox = form.querySelector('[type="checkbox"]'),
        btn  = form.querySelector('button');
    console.log(input.value);
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        let inputMovie = input.value        
        const favorite = checkBox.checked;

        if(inputMovie){
            if(inputMovie.length>21){
                inputMovie = `${inputMovie.substring(0,22)}...`;
            }
            movieDB.movies.push(inputMovie);
            createMovieList(movieDB.movies, movieList);
            e.target.reset();
            if(favorite){
                console.log("Добавляем любимый фильм");
            }
        }
    }
    );

    function createMovieList(films, parent){

        parent.innerHTML = '';
        films.sort();

        films.forEach((movie,i)=> {
            parent.innerHTML +=`
                <li class="promo__interactive-item">${i+1}. ${movie}
                    <div class="delete"></div>
                </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn,i)=>{
            btn.addEventListener('click', ()=>{
                console.log(btn.parentElement);
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);

                createMovieList(films, parent);

            });
        });
    }


});