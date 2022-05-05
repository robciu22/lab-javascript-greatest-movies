//Hi there
// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directorsArr = movies.map(function(eachMovie) {
        return eachMovie.director
    })
    return directorsArr
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    /*  
  if (drama.map(element => { element.director === 'Steven Spielberg' }))
        movies.map(element => { element.genre === 'Drama' })
*/

    const filteredMovies = movies.filter(function(filter) {
        return [movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')]
            //const spielberg = drama.map(element => { element.director === 'Steven Spielberg' })
    })
    return filteredMovies.length
}

//Hint: use a if case

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(aveArr) {
    const allScores = array.map(element => element.score)
    let total = 0
    for (i = 0; i < allScores.length; i += 1) {
        total += allScores[i]
    }
    console.log(total)
    const avgScore = total / (allScores.length)
    return Number(avgScore.toFixed(2))
}
//avg = sum / element.length   let moviesArr = JSON.parse(JSON.stringify(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const filteredMovies = movies.filter(filtered => filtered.genre.includes('Drama'))
    return scoresAverage(filteredMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let moviesArr = JSON.parse(JSON.stringify(movies))
    const sortArr = moviesArr.sort((a, b) => a.year - b.year)
    return sortArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        howManyMovies,
        scoresAverage,
        dramaMoviesScore,
        orderByYear,
        orderAlphabetically,
        turnHoursToMinutes,
        bestYearAvg,
    };
}