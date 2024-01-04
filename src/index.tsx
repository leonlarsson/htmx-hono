import { Hono } from "hono/quick";
import Layout from "./components/Layout";
import Todo from "./components/Todo";
import todos from "./todos";
import type { TodoType } from "../types";

const app = new Hono();

app.get("/", async c => {
  return c.html(
    <Layout>
      <div class="flex flex-col gap-2">
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </div>
    </Layout>,
  );
});

app.get("/:type/todos/:id/:property?", c => {
  const { type, id, property } = c.req.param();

  if (!["json", "components"].includes(type))
    return c.text("Invalid type. Needs to be one 'json' or 'components'.", 400);

  const todo = todos.find(todo => todo.id === parseInt(id));

  if (!todo) return c.notFound();

  const todoKeys = Object.keys(todo);

  if (property && !todoKeys.includes(property))
    return c.text(
      `Invalid property. Needs to be one of ${todoKeys.join(", ")}.`,
      400,
    );

  if (type === "json") {
    return c.json(property ? todo[property as keyof TodoType] : todo);
  } else {
    return property
      ? c.html(<span>{todo[property as keyof TodoType]}</span>)
      : c.html(<Todo todo={todo} />);
  }
});

export default app;
