import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
// old
import Game from "./components/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />}></Route>
        <Route path="/result" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
