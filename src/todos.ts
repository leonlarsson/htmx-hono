import type { TodoType } from "../types";

export default [
  {
    id: 1,
    title: "Do the dishes",
    description: "I need to do the dished because there are so many. Oh lord.",
  },
  {
    id: 2,
    title: "Make dinner",
    description: "I need to make dinner because I am hungry and want to eat.",
  },
  {
    id: 3,
    title: "Eat dinner",
    description:
      "I need to consume dinner because I made the food and need to eat.",
  },
] satisfies TodoType[] as TodoType[];
