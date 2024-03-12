"use client";
import { todo } from "@/types";
import prisma from "@/utils/prisma";
import { updateTodo } from "@/utils/todoPrisma";
import Link from "next/link";
import { ChangeEventHandler, useState } from "react";

type props = {
  todo: todo;
};

export default function Todo({ todo }: props) {
  const [completed, setCompleted] = useState(todo.completed);
  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    setCompleted(!completed);
    const newTodo = { ...todo };
    newTodo.completed = !completed;
    await updateTodo(newTodo);
  };
  return (
    <>
      <div className="flex flex-row items-start justify-between w-full">
        <Link href={`/todo/${todo.id}`} className="w-full py-2 pl-4">
          {todo.title}
        </Link>
        <input
          name={`checkbox${todo.title}`}
          type="checkbox"
          checked={completed}
          onChange={handleChange}
          className="pr-4"
        />
      </div>
    </>
  );
}
