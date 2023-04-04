import "./App.css";
import Footer from "./Components/Footer";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <NavBar />
        <Container>
          <Landing />
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
