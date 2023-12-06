const URL = "https://exercisedb.p.rapidapi.com/exercises";
const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const fetchData = async (url = URL, options = OPTIONS) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { fetchData };
