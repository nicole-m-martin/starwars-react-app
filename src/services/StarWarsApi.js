import { charDetailsFromApi } from './dataUtils';

export const getAllChars = async (pageNumber) => {
  const response = await fetch(
    `https://swapi.dev/api/people/?page=${pageNumber}`
  );

  const data = await response.json();
  const mungedData = charDetailsFromApi(data);

  return mungedData;
};

export const searchAllChars = async (query) => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${query}`);

  const data = await response.json();
  const mungedData = charDetailsFromApi(data);

  return mungedData;
};
