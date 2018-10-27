import API_KEY from './constants';

export const fetch = (url, options = {}) => global.fetch(url, {
  ...options,
  headers: {
    ...options.headers,
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
  },
});

export default {};
