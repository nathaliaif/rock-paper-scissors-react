import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Result from "./pages/result";
import { Layout } from "./Layout";

// Represents the application itself
// If we want to have multiple pages, we should treat the App.tsx the place that houses all of our pages

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </Router>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Game />}></Route>
    //     <Route path="/result" element={<Test />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
