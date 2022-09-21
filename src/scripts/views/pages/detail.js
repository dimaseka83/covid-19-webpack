import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
    render: async () => {
        const view = /*html*/`
            <div class="content">
                <h2 class="content__heading">Detail</h2>
                <div id="movie" class="movie">
                </div>
            </div>
        `
        return view
    },

    afterRender: async () => {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const movie = await TheMovieDbSource.detailMovie(url.id);
        const movieContainer = document.querySelector('#movie');
        movieContainer.innerHTML = createMovieDetailTemplate(movie);
    }
};

export default Detail;