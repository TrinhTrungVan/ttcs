import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = `https://api.themoviedb.org/3/movie/${movieType[type]}?api_key=15f41139dd460ab41b746dc923f23a63&${params}`;
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = `https://api.themoviedb.org/3/movie/${tvType[type]}?api_key=15f41139dd460ab41b746dc923f23a63&${params}`;
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = `https://api.themoviedb.org/3/${category[cate]}/${id}/videos?api_key=15f41139dd460ab41b746dc923f23a63&language=en-US`
        return axiosClient.get(url, { params: {} });
    },
    search: (cate, params) => {
        const url = `https://api.themoviedb.org/3/search/${category[cate]}?api_key=15f41139dd460ab41b746dc923f23a63&query=${params}`;
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = `https://api.themoviedb.org/3/${category[cate]}/${id}?api_key=15f41139dd460ab41b746dc923f23a63&language=en-US${params}`;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = `https://api.themoviedb.org/3/${category[cate]}/${id}/credits?api_key=15f41139dd460ab41b746dc923f23a63&language=en-US`;
        return axiosClient.get(url, { params: {} });
    },
    similar: (cate, id) => {
        const url = `https://api.themoviedb.org/3/${category[cate]}/${id}/similar?api_key=15f41139dd460ab41b746dc923f23a63&language=en-US&page=1`;
        return axiosClient.get(url, { params: {} });
    },
}

export default tmdbApi;