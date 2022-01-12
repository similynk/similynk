import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Optionbar from "./components/Optionbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Optionbar />
      </div>
    </div>
  );
}

export default App;