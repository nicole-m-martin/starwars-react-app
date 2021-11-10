export const getAllChars = async (pages) => {
  const response = await fetch(`https://swapi.dev/api/people/?page${pages}`);
  const data = await response.json();
  console.log(data);

  return data.results.map((char) => ({
    name: char.name,
    gender: char.gender,
    hair: char.hair_color,
    mass: char.mass,
    height: char.height,
  }));
};
