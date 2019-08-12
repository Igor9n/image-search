export const getURLWithKey = () => {
  const url = process.env.REACT_APP_API_URL;
  const key = process.env.REACT_APP_API_KEY;

  return `${ url }?key=${ key }`;
};