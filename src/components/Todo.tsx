import type { TodoType } from "../../types";

export default ({ todo }: { todo: TodoType }) => {
  return (
    <div class="flex flex-col gap-2 rounded border border-black/50 bg-neutral-100 p-2 transition-colors hover:border-black">
      <span class="text-lg font-semibold">{todo.title}</span>
      <button
        class="w-fit bg-black p-1 text-white hover:bg-black/80"
        hx-get={`/components/todos/${todo.id}`}
        hx-swap="outerHTML"
      >
        View description
      </button>
    </div>
  );
};
