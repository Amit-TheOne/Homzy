import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div>
              <div className="white-gradient"/>
                <Navbar />
                <Hero />
            </div>
        </div>
    );
}

export default App;
