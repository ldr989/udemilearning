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

function sortTitles(data) {
    let newMovieDB = {};
    for (let i = 0; i < data.movies.length; i++) {
        newMovieDB[i + 1] = data.movies.sort()[i];
    }
    return newMovieDB;
}
const newMovieDB = sortTitles(movieDB);

const promo = document.getElementsByClassName('promo'),
      adv = document.getElementsByClassName('promo__adv'),
      genre = document.getElementsByClassName('promo__genre'),
      bg = document.querySelectorAll('.promo__bg'),
      movieList = document.getElementsByClassName('promo__interactive-item');

adv[0].remove();
genre[0].textContent = 'ДРАМА';
bg[0].style.cssText = 'background: url(../img/bg.jpg) center top/cover no-repeat;';

for (let i = 0; i < movieList.length; i++) {
    movieList[i].innerHTML = `${i + 1}. ${newMovieDB[i + 1]} <div class="delete"></div>`;
}
console.log(movieList.length);

