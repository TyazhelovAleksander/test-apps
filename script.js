
//1
let numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
console.log(numberOfFilms);

//2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//console.log(personalMovieDB);

//3
for(let i = 0; i < 2; i++){
    let lastFilm = prompt('Один из последних просмотренных фильмов?');
    let grade = prompt('На сколько его оцениваете?');

    personalMovieDB.movies[lastFilm] = grade;
}
 
console.log(personalMovieDB);