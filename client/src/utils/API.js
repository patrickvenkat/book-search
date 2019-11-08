import axios from "axios";

// The getBooks method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    console.log(query);
    // return axios.get("/api/books", { params: { q: query } });
    return axios.get("https://www.googleapis.com/books/v1/volumes/?", { params: { q: query } });
    // return axios.get(`"https://www.googleapis.com/books/v1/volumes?q=, { query }`);
  }
};
