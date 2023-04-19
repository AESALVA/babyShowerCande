import "./App.css";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Contact";
import About from "./Components/About";
import {
  useUserContext,
} from "./UserProvider";
import Dashboard from "./Components/Dashboard";


function App() {
  const auth = useUserContext();

  return (
    <>
        <div className="Wrapper">
          <NavBar />
          <div className="header">
            <Header />
          </div>
          {auth.auth.name?(<><div className="header">
            <Dashboard />
            <Footer />
          </div></>):(<Footer />)}
        </div>
    </>
  );
}

export default App;
