import {
  normalize,
  schema,
} from 'normalizr';
import { fetch } from '../../utils';

const filmsSchema = new schema.Entity('films');

const SCHEMAS = {
  FILMS: new schema.Array(filmsSchema),
};

export async function fetchFilmsListPage() {
  const url = 'https://ghibliapi.herokuapp.com/films';
  const { response, data } = await fetch(url);
  const {
    result: ids,
    entities: {
      films: entities,
    },
  } = normalize(data, SCHEMAS.FILMS);

  return {
    response,
    data: {
      ids,
      entities,
    },
  };
}

export default {};
