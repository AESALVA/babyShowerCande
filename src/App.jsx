import "./App.css";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import UserProvider from "./UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <div className="App">
          <NavBar />
          <Header />
          <Footer />
        </div>
      </UserProvider>
    </>
  );
}

export default App;
