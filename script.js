
//1
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
    }
}

start();

//2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//console.log(personalMovieDB);


function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let lastFilm = prompt('Один из последних просмотренных фильмов?','');
        while(lastFilm == null || lastFilm.length === 0 || lastFilm.length > 50){
            lastFilm = prompt('Повторите Один из последних просмотренных фильмов?','');
        }
        let grade = prompt('На сколько его оцениваете?');
        while(grade == null || grade.length === 0 || grade.length > 50){
            grade = prompt('Повторите один из последних просмотренных фильмов?','');
        }
    
        personalMovieDB.movies[lastFilm] = grade;
    }
}
 
rememberMyFilms();

function detectPersonalLevel(){
    const SMALL_COUNT = 10;
    const BIG_COUNT = 30;
    if(personalMovieDB.count < SMALL_COUNT){
        console.log("Просмотрено довольно мало фильмов");
    }
    else if(personalMovieDB.count < BIG_COUNT){
        console.log("Вы классический зритель");
    }
    else if(personalMovieDB.count > BIG_COUNT) {
        console.log("Вы киноман");
    }
    else{
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        let genre = prompt(`Ваш любимый жанр по номером ${i}`,'');
        personalMovieDB.genres.push(genre) ;
    }
}

writeYourGenres();

function showMyDB(pmDB){
    if(pmDB['private'] == false){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB);