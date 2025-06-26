
import './App.css';
import Todo from './components/Todo'; 
import Header from './components/Header';
import FetchMovies from './components/FetchMovies';
import Movie from "./components/Movie";
import Promises from './components/Promises';
function App() {
  return (
      <div className="App">
        
        <Header />
        <Todo />
        {/* <Movie/> */}
        {/* <Promises /> */}
        {/* <FetchMovies /> */}
      </div>
  )
}

export default App
