export const getAllChars = async (pageNumber) => {
  const response = await fetch(
    `https://swapi.dev/api/people/?page=${pageNumber}`
  );
  const data = await response.json();
  // console.log(data);

  return data.results.map((char) => ({
    name: char.name,
    gender: char.gender,
    hair: char.hair_color,
    mass: char.mass,
    height: char.height,
  }));
};

export const searchAllChars = async (query) => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${query}`);
  const data = await response.json();

  const searchResults = data.results.map((char) => ({
    name: char.name,
    gender: char.gender,
    hair: char.hair_color,
    mass: char.mass,
    height: char.height,
  }));

  console.log(searchResults);
  return searchResults;
};
