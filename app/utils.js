import { camelizeKeys } from 'humps';

export const fetch = async (url, options = {}) => {
  const response = await global.fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  });
  let data = await response.json();

  if ([200, 201].includes(response.status)) {
    data = camelizeKeys(data);
  }

  return {
    data,
    response,
  };
};

export default {};
