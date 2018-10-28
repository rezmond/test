import { fetch } from '../../utils';

export function fetchFilmData(url) {
  const fullUrl = url + '?fields=title,director,producer,rt_score,release_date,description';
  return fetch(fullUrl);
}

export default {};
