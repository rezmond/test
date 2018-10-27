import {
  normalize,
  schema,
} from 'normalizr';
import { fetch } from '../../utils';

const filmsSchema = new schema.Entity('films');

const SCHEMAS = {
  FILMS: new schema.Array(filmsSchema),
};

export function fetchFilmsListPage() {
  const url = 'https://ghibliapi.herokuapp.com/films';
  return fetch(url)
    .then(response => response.json()
      .then((json) => {
        if (response.status !== 200) {
          return {
            json,
            response,
          };
        }

        const {
          result: ids,
          entities: {
            films: entities,
          },
        } = normalize(json, SCHEMAS.FILMS);
        return {
          response,
          data: {
            ids,
            entities,
          },
        };
      }));
}

export default {};
