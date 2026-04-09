import PayPage from "./components/PayPage/PayPage";
import "./App.css";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
       <div className="beam-horizontal"></div>
        <div className="beam-vertical"></div>
      <Header />
      <PayPage />
    </div>
  );
}

export default App;
