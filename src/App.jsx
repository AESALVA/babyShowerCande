import "./App.css";
import Footer from "./Components/Footer";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
