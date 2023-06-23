import "./styles.css";
import { Routes, Route } from "react-router-dom";
import HabitDetails from "./components/HabitDetails";
import Archive from "./components/Archive";
import Home from "./components/Home";
import NewHabit from "./components/NewHabit";
import { DataContext } from "./contexts/DataContext";
import { useContext } from "react";

export default function App() {
  const { openNew } = useContext(DataContext);
  return (
    <div className="App">
      {openNew ? (
        <div className="modal">
          <NewHabit />
        </div>
      ) : (
        <></>
      )}
      <Routes>
        <Route path="/details/:habitId" element={<HabitDetails />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
