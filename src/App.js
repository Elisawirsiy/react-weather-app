import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Loop React</h1>
        <SearchEngine city="Paris" />
      </header>
    </div>
  );
}

export default App;
