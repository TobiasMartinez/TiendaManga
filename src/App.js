import "./App.scss";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer name={"Jimena"} />
    </div>
  );
}

export default App;
