import './App.css';
import SearchBar from './components/Search/SearchBar';
// import Home from './pages/Home';
import StarWarsContainer from './containers/StarWarsContainer';

function App() {
  return (
    <div className="App">
      <h1>Star Wars Universe</h1>
      <SearchBar />
      <StarWarsContainer />
    </div>
  );
}

export default App;
