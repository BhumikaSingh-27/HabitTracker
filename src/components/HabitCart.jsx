import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { NavLink } from "react-router-dom";
const HabitCart = ({ data }) => {
  const { edit, remove, archive } = useContext(DataContext);
  return (
    <>
      <div className="HabitInfo">
        <NavLink className="notLink" to={`/details/${data.id}`}>
          <h1>{data?.name}</h1>
        </NavLink>
        <div className="habitBtns">
          <button className="btn" onClick={() => edit(data.id)}>
            Edit
          </button>

          {data.isArchived ? (
            <button className="btn" onClick={() => archive(data.id)}>
              unarchive
            </button>
          ) : (
            <button className="btn" onClick={() => archive(data.id)}>
              archive
            </button>
          )}

          <button className="btn" onClick={() => remove(data.id)}>
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default HabitCart;
