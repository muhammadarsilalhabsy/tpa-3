const IMG = `https://image.tmdb.org/t/p/w500/`
const API_KEY = `dbeea045473c518b79978a32c8604ad5`;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const getSearchBtn = document.querySelector(".search-btn");

fetch(url)
.then(response => response.json())
.then(o => {
    showMovie(o);
});

getSearchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const search_key = document.querySelector("input").value;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_key}&page=1`)
    .then(response => response.json())
    .then(o => {        
        showMovie(o);
    })

});

function showMovie(o){
    let cards = '';
    o.results.slice(0,9).forEach(m => cards += showCars(m));
    let getMovieContainer = document.querySelector(".movie-container")
    getMovieContainer.innerHTML = cards;
}

function showCars(m) {
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${IMG + m.backdrop_path}" class="card-img-top" />
                    <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <p class="card-text">${m.title}</p>
                        <p><b>${m.vote_average}</b></p>
                    </div>
                    <p class="card-text">
                        <small class="text-muted">${m.release_date}</small>
                    </p>
                    </div>
                </div>
            </div>`
}