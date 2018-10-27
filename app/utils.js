
export const fetch = (url, options = {}) => global.fetch(url, {
  ...options,
  headers: {
    ...options.headers,
    'Content-Type': 'application/json',
  },
});

export default {};
