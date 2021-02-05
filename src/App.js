import "./App.css";
import Cookbook from "./components/Cookbook";
import Nav from "./components/Nav";
import Functional from "./components/Functional";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Functional />
      <Cookbook />
    </div>
  );
}

export default App;
