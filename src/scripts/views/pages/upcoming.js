import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  render: async () => {
    const view = /* html */`
            <div class="content">
                <h2 class="content__heading">Upcoming</h2>
                <div id="movies" class="movies">
                </div>
            </div>
        `;
    return view;
  },

  afterRender: async () => {
    const movies = await TheMovieDbSource.upcomingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;
