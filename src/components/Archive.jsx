import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

const Archive = () => {
  const { habitData, unarchive } = useContext(DataContext);
  return (
    <div className="archive-page">
      <h1>Archieve habits</h1>
      <NavLink to="/">
        <button className="btn">Back to home</button>
      </NavLink>
      <div className="archive-habits">
        {habitData
          .filter(({ isArchive }) => isArchive)
          .map((data) => (
            <div key={data.id}>
              <div className="HabitInfo">
                <NavLink className="notLink" to={`/details/${data.id}`}>
                  <h1>{data?.name}</h1>
                </NavLink>
                <div className="habitBtns">
                  <button className="btn" onClick={() => unarchive(data.id)}>
                    unarchive
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Archive;
