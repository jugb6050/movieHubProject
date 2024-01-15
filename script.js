const apiLink =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=07893e2fd351edb621221138b88b3822&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=07893e2fd351edb621221138b88b3822&query=";

let movieSection = document.getElementById("movieSection");
console.log(movieSection);
let form = document.getElementById("searchForm");
console.log(form);
let searchQuery = document.getElementById("searchBar");
console.log(searchQuery);

function returnMovies(url) {
  //fetch the data from the api
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      data.results.forEach((element) => {
        //this is creating all the different components for the section
        const div_row = document.createElement("div");
        div_row.setAttribute("class", "row");

        const div_column = document.createElement("div");
        div_column.setAttribute("class", "column");

        const div_card = document.createElement("div");
        div_card.setAttribute("class", "movieCard");

        const center = document.createElement("center");

        const movieImage = document.createElement("img");
        movieImage.setAttribute("class", "movieImage");

        const movieName = document.createElement("h3");
        movieName.setAttribute("class", "movieTitle");

        //parsing the elment object and getting the title + setting the image path
        movieName.innerHTML = `${element.title}`;
        movieImage.src = imgPath + element.poster_path;

        //adding each of the components as childs to eachother and then finally putting it all under parent section
        center.appendChild(movieImage);
        center.appendChild(movieName);
        div_card.appendChild(center);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);
        movieSection.appendChild(div_row);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  movieSection.innerHTML = "";

  const searchItem = searchQuery.value;

  if (searchItem) {
    returnMovies(searchAPI + searchItem);
    searchQuery.value = "";
  }
});

returnMovies(apiLink);
