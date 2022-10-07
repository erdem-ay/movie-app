const APIURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let movieContent = document.querySelector("#content");
let formElm = document.querySelector("#search");
let inputElm = document.querySelector("#search input");

formElm.onsubmit = (event) => {
  event.preventDefault();
  getMovies(SEARCHAPI + inputElm.value);
};

window.addEventListener("load", function () {
  getMovies(APIURL);
});

function getMovies(url) {
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showMovies(data.results);
      console.log(data);
    });
}

function showMovies(results) {
  movieContent.innerHTML = "";

  results.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
    <img src="${IMGPATH}${poster_path}" />
    `;

    movieContent.appendChild(movieEl);
  });
}
