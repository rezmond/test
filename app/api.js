
import { fetch } from './utils';

export function fetchFilmsListPage() {
  const url = 'https://ghibliapi.herokuapp.com/films';
  return fetch(url)
    .then(response => response.json()
      .then(json => ({
        response,
        json,
      })));
}

export default {};
