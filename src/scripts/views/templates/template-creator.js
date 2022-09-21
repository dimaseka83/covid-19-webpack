import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
    <h2 class="movie__title">${movie.title}</h2>
    <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
    <div class="movie__info">
        <h3>Information</h3>
        <h4>Tagline</h4>
        <p>${movie.tagline}</p>
        <h4>Release Information</h4>
        <p>${movie.release_date}</p>
        <h4>Rating</h4>
        <p>${movie.vote_average}</p>
    </div>
    <div class="movie__overview">
        <h3>Overview</h3>
        <p>${movie.overview}</p>
    </div>
`;

const createMovieItemTemplate = (movie) => `
    <div class="movie-item">
        <div class="movie-item__header">
            <img class="movie-item__header__poster" alt="${movie.title}" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}">
            <div class="movie-item__header__rating">
                <p>⭐️<span class="movie-item__header__rating__score">${movie.vote_average}</span></p>
            </div>
        </div>
        <div class="movie-item__content">
            <h3><a href="${`/#/detail/${movie.id}`}">${movie.title}</a></h3>
            <p>${movie.overview}</p>
        </div>
    </div>
`;

export {
    createMovieDetailTemplate,
    createMovieItemTemplate,
}
