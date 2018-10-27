
import { fetch } from './utils';

export function fetchCatsListPage({
  limit = 25,
  page = 1,
} = {}) {
  let url = 'https://api.thecatapi.com/v1/images/search?format=json';
  url += `&limit=${limit}`;
  url += `&page=${page}`;
  return fetch(url)
    .then(response => response.json()
      .then(json => ({
        response,
        json,
      })));
}

export default {};
