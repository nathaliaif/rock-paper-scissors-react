import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Result from "./pages/result.tsx";
import Layout from "./Layout";
import { ScoreContext } from "./components/ScoreContext";

// Represents the application itself
// If we want to have multiple pages, we should treat the App.tsx the place that houses all of our pages

export default function App() {
  return (
    <ScoreContext>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Routes>
      </Router>
    </ScoreContext>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Game />}></Route>
    //     <Route path="/result" element={<Test />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}
