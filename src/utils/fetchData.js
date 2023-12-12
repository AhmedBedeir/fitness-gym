const URL = "https://exercisedb.p.rapidapi.com/exercises";
const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const youtubeSearchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

const fetchData = async (url = URL, options = OPTIONS) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchData, youtubeSearchUrl, youtubeSearchOptions };
