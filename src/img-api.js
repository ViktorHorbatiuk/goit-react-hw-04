import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const KEY = "F93V1WmW5QKzD-vFw3aNxOtZ0EDKKbeo4C6yelkAoYk";

const fetchImages = async (searchWord, page) => {
  const response = await axios.get("search/photos", {
    params: {
      query: searchWord,
      per_page: 12,
      page,
    },
    headers: {
      Authorization: `Client-ID ${KEY}`,
    },
  });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
};

export default fetchImages;