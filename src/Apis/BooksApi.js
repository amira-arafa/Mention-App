import axios from 'axios';

const URL = `https://www.googleapis.com/books/v1/volumes?q`;

export default class BooksApi {

    static getSearchResults = async(searchTerm)=> await axios.get(`${URL}=${searchTerm}`);
  }
