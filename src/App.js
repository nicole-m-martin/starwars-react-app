import './App.css';
import StarWarsContainer from './containers/StarWarsContainer';
import Header from './components/UI/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <StarWarsContainer />
    </div>
  );
}

export default App;
