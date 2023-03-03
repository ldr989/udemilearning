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

// Мой вариант решения задачи:

/* function sortTitles(data) {
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
 */

// Вариант Ивана




const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
}); 


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.+

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки +

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм" +

5) Фильмы должны быть отсортированы по алфавиту +*/

// Мой вариант решения задачи:

const add = document.querySelectorAll('.add'),
      button = add[0].querySelector('button'),
      input = add[0].querySelector('.adding__input'),
      checkbox = add[0].querySelector('.checkbox');



button.addEventListener('click', function(e){
    e.preventDefault();
    let cut ='';
    if (input.value.length > 21) {
        cut = `${input.value.slice(0, 21).toLowerCase()}...`  ;
    } else if (typeof input.value !== 'string' || input.value === ''){
        return alert('Введите название фильма');
    } else {
        cut = input.value.toLowerCase();
    }
    const makeFirstLetterCapitalized = cut.charAt(0).toUpperCase() + cut.slice(1);
    movieList.innerHTML ='';

    movieDB.movies.push(makeFirstLetterCapitalized);
    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
    input.value ='';
    }); 
    
    if (checkbox.checked) {
        console.log('"Добавляем любимый фильм"');
    }

});




