import "./App.css";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchEngine />
      </header>
      <Footer />
    </div>
  );
}

export default App;
