const apiConfig = {
    baseUrl: process.env.REACT_APP_BASE_URL,
    language: "en-US",
    apiKey: process.env.REACT_APP_API_KEY,
    originalImage: (imgPath) => process.env.REACT_APP_ORIGINAL_IMAGE + imgPath,
    w500Image: (imgPath) => process.env.REACT_APP_W500_IMAGE + imgPath,
};

export default apiConfig;
