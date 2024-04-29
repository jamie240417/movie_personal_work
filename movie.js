/*const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2FhMGY2NWQzMmY2Njg2OGM1OGZkMjI4ZGJlMWQzMiIsInN1YiI6IjY2MmEwMzVhZGUxMWU1MDA5YjcwZDdhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DbUoAYRKH46tv2TJ6UCw3r4cecF0LNGd7avpOSbYl3A'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err)); */

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2FhMGY2NWQzMmY2Njg2OGM1OGZkMjI4ZGJlMWQzMiIsInN1YiI6IjY2MmEwMzVhZGUxMWU1MDA5YjcwZDdhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DbUoAYRKH46tv2TJ6UCw3r4cecF0LNGd7avpOSbYl3A'
  }
};


fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    const movieCards = document.querySelectorAll('.movie-card');
    data.results.forEach((movie, index) => { //data. => key 값을가져오기: data => .keyname
      let movieCard = movieCards[index];
      const movieId = movieCard[index];
      let imgElement = movieCard.querySelector('img'); //querySelector 함수: 괄호 속에 제공한 선택자와 일치하는 문서 내 첫 번째 Element를 반환
      let posterPath = movie.poster_path;
      const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
      imgElement.src = posterUrl;
      const titleElement = movieCard.querySelector('.movie-title');
      const overviewElement = movieCard.querySelector('.movie-overview');
      const popularityElement = movieCard.querySelector('.movie-popularity');


      titleElement.textContent = movie.original_title;
      overviewElement.textContent = movie.overview;
      popularityElement.textContent = `Popularity: ${movie.popularity}`;
      movieCard.id = `movie-card-${movie.id}`;

    });
  })
  .catch(err => console.error(err));

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)




/*
function search() {
  const payrollTitle = document.querySelectorAll('search-input');
  const filterValue = payrollTitle.values.toLowCase();

  for (let i = 0; i < payrollTitle.length; i++){
    let rows = payrollTitle[i].textContent.toLowerCase();
    const id = payrollTitle[i].parentElement.parentElement.parentElement.id;

    if (rows.includes(filterValue)) {
      document.getElementById(id).style.display = '';
    } else {
      document.getElementById(id).style.display = 'none';
    }
  }
}
document.querySelector('#search-btn').addEventListener('click',search);
*/