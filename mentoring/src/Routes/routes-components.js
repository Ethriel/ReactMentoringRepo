import Lesson1 from "../Lessons/Lesson1/index";
import Lesson2 from "../Lessons/Lesson2/index";
import Lesson3 from "../Lessons/Lesson3/index";

export default [
  { component: Lesson1, path: "/lesson1", title: "Lesson One - Intro" },
  {
    component: Lesson2,
    path: "/lesson2",
    title: "Lesson Two - Base Composition",
  },
  {
    component: Lesson3,
    path: "/lesson3",
    title: "Lesson Three - MOAR Composition",
  },
];
