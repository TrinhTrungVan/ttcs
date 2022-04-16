const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '15f41139dd460ab41b746dc923f23a63',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;