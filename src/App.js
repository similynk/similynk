import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Optionbar from "./components/Optionbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Optionbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;