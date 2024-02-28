import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Companies from "./components/Companies/Companies";

function App() {
    return (
        <div className="App">
            <div>
              <div className="white-gradient"/>
                <Navbar />
                <Hero />
            </div>
            <Companies />
        </div>
    );
}

export default App;
