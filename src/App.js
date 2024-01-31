// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CarsPage from "./components/pages/CarsPage";
import BookTicketsPage from "./components/pages/BookTicketsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cars" element={<CarsPage></CarsPage>}></Route>
        <Route
          path="/book"
          element={<BookTicketsPage></BookTicketsPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
