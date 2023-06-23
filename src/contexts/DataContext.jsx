import { createContext, useState } from "react";
import habits from "../data";
import { v4 as uuid } from "uuid";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [habitData, setHabitData] = useState(habits);
  const [openNew, setOpenNew] = useState(false);
  const [newHabit, setNewHabit] = useState({
    id: "",
    name: "",
    repeat: "",
    goal: "",
    timeOfDay: "",
    startDay: "",
    isArchive: false
  });

  const discardData = () => {
    setOpenNew(!openNew);
    setNewHabit({
      id: "",
      name: "",
      repeat: "",
      goal: "",
      timeOfDay: "",
      startDay: "",
      isArchive: false
    });
  };
  console.log("closed", openNew);

  const saveData = () => {
    if (!newHabit.id) {
      console.log("new task", newHabit);
      setHabitData([...habitData, { ...newHabit, id: uuid() }]); //id in newHabit is over-riden, and id:uuid() generates the id
    } else {
      console.log("new", newHabit);
      const newData = habitData.map((data) =>
        data.id === newHabit.id
          ? {
              ...newHabit
            }
          : data
      );

      setHabitData(newData);
    }
    discardData();
  };
  console.log(habitData);

  const edit = (habitId) => {
    setOpenNew(true);
    const dataToEdit = habitData.find(({ id }) => id === habitId);
    setNewHabit(dataToEdit);
  };

  const remove = (hId) => {
    setHabitData(habitData.filter(({ id }) => id !== hId));
  };

  const archive = (habitId) => {
    const archiveData = habitData.map((data) =>
      data.id === habitId ? { ...data, isArchive: true } : data
    );
    setHabitData(archiveData);
  };

  const unarchive = (habitId) => {
    const updateArchive = habitData?.map((data) =>
      data.id === habitId ? { ...data, isArchive: false } : data
    );
    setHabitData(updateArchive);
  };
  return (
    <DataContext.Provider
      value={{
        habitData,
        setHabitData,
        newHabit,
        setNewHabit,
        discardData,
        saveData,
        openNew,
        setOpenNew,
        edit,
        remove,
        archive,
        unarchive
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
