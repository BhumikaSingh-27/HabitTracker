import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { NavLink } from "react-router-dom";

const HabitDetails = () => {
  const { habitId } = useParams();
  const { habitData } = useContext(DataContext);
  const habit = habitData.find(({ id }) => id.toString() === habitId);
  return (
    <div>
      <div className="habitDetailsPage">
        <h1>Habit details</h1>
        <h2>
          Name: <b>{habit?.name}</b>
        </h2>
        <p>
          Repeat: <b> {habit?.repeat}</b>
        </p>
        <p>
          Goal: <b>{habit?.goal}</b>
        </p>
        <p>
          time of the day: <b>{habit?.timeOfDay}</b>
        </p>
        <p>
          Start date: <b>{habit?.startDay}</b>
        </p>
      </div>
      <div>
        {" "}
        <NavLink to="/">
          <button className="btn">Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default HabitDetails;
