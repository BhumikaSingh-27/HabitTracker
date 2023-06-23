import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { NavLink } from "react-router-dom";
import HabitCart from "./HabitCart";

const Home = () => {
  const { habitData, setOpenNew } = useContext(DataContext);
  const homeData = habitData.filter(({ isArchive }) => !isArchive);
  return (
    <div className="homePage">
      <div className="homeContainer">
        <NavLink to="/archive">
          <button className="btn">Go to Archive</button>
        </NavLink>
        <h1>Habit Tracker</h1>
      </div>
      <div className="habitlist">
        <div onClick={() => setOpenNew(true)}>
          <h2 className="h2">Create My Own</h2>
        </div>

        {homeData.map((data) => (
          <div key={data.id}>
            {" "}
            <HabitCart data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
