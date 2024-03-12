"use client";
import { todo } from "@/types";
import { createTodo, updateTodo } from "@/utils/todoPrisma";
import { useRouter } from "next/navigation";
import { useState, FormEventHandler } from "react";

type props = {
  todo: todo;
};

export function ModifyTodoForm({ todo }: props) {
  const router = useRouter();
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    todo.title = title;
    todo.completed = completed;
    await updateTodo(todo);
    router.push("/");
  };
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col items-start justify-center gap-10"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            placeholder="nom de la tache"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            id="title"
            className="py-2"
          />
        </div>

        <div className="flex flex-row gap-3">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
            name="check"
          />
          <label htmlFor="check">Complété</label>
        </div>

        <button
          type="submit"
          className=" bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Modifier
        </button>
      </form>
    </>
  );
}

export function CreateTodoForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const todo = await createTodo(title, completed);
    router.push(`/todo/${todo.id}`);
  };
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col items-start justify-center gap-10"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            placeholder="nom de la tache"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            id="title"
            className="py-2 px-4"
          />
        </div>

        <div className="flex flex-row gap-3">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
            name="check"
          />
          <label htmlFor="check">Complété</label>
        </div>

        <button
          type="submit"
          className=" bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Créer
        </button>
      </form>
    </>
  );
}
