import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";

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
            <Value />
            <Contact />
        </div>
    );
}

export default App;
