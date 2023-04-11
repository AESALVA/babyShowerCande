import "./App.css";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import UserProvider from "./UserProvider";
import Contact from "./Components/Contact";
import About from "./Components/About";


function App() {
  return (
    <>
      <UserProvider>
        <div className="Wrapper">
          <NavBar />
          <div className="header">
            <Header />
          </div>
          <div className="header">
            <Contact />
            <About />
            <Footer />
          </div>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
