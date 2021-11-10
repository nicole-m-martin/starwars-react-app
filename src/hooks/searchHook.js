// import { useState, useEffect } from 'react';
// import { searchllChars } from '../services/StarWarsApi';

// export const searchChars = () => {
//   const [loading, setLoading] = useState(true);
//   const [chars, setChars] = useState([]);
//   const [query, setQuery] = useState('');

//   useEffect(() => {
//     searchAllChars(query)
//       .then((chars) => setChars(chars))
//       .finally(() => setLoading(false));
//   }, [query]);

//   return { loading, chars, query };
// };
