import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";

function App() {
    return (
        <div className="App">
            <div>
              <div className="white-gradient"/>
                <Navbar />
                <Hero />
            </div>
            <Companies />
            <Residencies />
        </div>
    );
}

export default App;
