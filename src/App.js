import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import VendingMachine from "./components/VendingMachine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <VendingMachine />
      </div>
    </div>
  );
}

export default App;
