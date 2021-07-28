import "./App.css";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App container">
      <header className="App-body ">
        <h1>Weather App</h1>
        <SearchEngine />
      </header>
      <Footer />
    </div>
  );
}

export default App;
