import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <div className="portfolio-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
