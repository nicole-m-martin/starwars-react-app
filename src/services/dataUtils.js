export const charDetailsFromApi = (data) => {
  const mungedData = data.results.map(
    ({ name, gender, hair_color, mass, height }) => ({
      name: name,
      gender: gender,
      hair: hair_color,
      mass: mass,
      height: height,
    })
  );

  return mungedData;
};
