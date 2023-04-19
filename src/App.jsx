import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";

function App() {
    return (
        <div className="App">
            <Nav />
            <Jumbotron />
            <SoundSection />
            <WebgiViewer />
        </div>
    );
}

export default App;
