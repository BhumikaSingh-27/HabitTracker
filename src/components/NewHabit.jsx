import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const NewHabit = () => {
  const {
    newHabit,
    setNewHabit,
    setOpenNew,
    discardData,
    saveData
  } = useContext(DataContext);
  console.log(newHabit);
  return (
    <>
      <div className="habitContainer">
        <h2>New habit</h2>
        <div className="input">
          <label> NAME:</label>
          <input
            value={newHabit.name}
            type="text"
            onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
          />
        </div>
        <div className="habitDetails">
          <div>
            <label> REPEAT:</label>
            <select
              onChange={(e) =>
                setNewHabit({ ...newHabit, repeat: e.target.value })
              }
            >
              <option>choose from below</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
          <div>
            <label> GOAL:</label>
            <select
              onChange={(e) =>
                setNewHabit({ ...newHabit, goal: e.target.value })
              }
            >
              {" "}
              <option value="">choose from below</option>
              <option value="1 times daily">1 times daily</option>
              <option value="2 times daily">2 time daily</option>
            </select>
          </div>
        </div>
        <div className="habitDetails">
          <div>
            <label> TIME OF THE DAY:</label>
            <select
              onChange={(e) =>
                setNewHabit({ ...newHabit, timeOfDay: e.target.value })
              }
            >
              <option value="">choose from below</option>

              <option value="any time">Any time</option>
              <option value="morning">Morning</option>
            </select>
          </div>
          <div>
            <label> START DATE:</label>
            <select
              onChange={(e) =>
                setNewHabit({ ...newHabit, startDay: e.target.value })
              }
            >
              <option value="">choose from below</option>

              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>
          </div>
        </div>
        <div className="habitButtons">
          <button
            onClick={() => {
              setOpenNew(false);
              console.log("false");
              discardData();
            }}
          >
            Discard
          </button>
          <button onClick={saveData}>Save</button>
        </div>
      </div>
    </>
  );
};

export default NewHabit;
