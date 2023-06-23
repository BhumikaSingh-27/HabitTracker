import { v4 as uuid } from "uuid";

const habits = [
  {
    id: uuid(),
    name: "set the goal",
    repeat: "daily",
    goal: "1 times daily",
    timeOfDay: "any time",
    startDay: "today",
    isArchive: false
  },
  {
    id: uuid(),
    name: "workout",
    repeat: "daily",
    goal: "1 times daily",
    timeOfDay: "morning",
    startDay: "today",
    isArchive: false
  },
  {
    id: uuid(),
    name: "meditate",
    repeat: "weekly",
    goal: "2 times daily",
    timeOfDay: "morning",
    startDay: "tomorrow",
    isArchive: false
  }
];

export default habits;
