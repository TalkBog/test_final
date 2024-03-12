"use client";
import Todo from "@/componants/todo";
import { todo } from "@/types";
import prisma from "@/utils/prisma";
import { getTodos } from "@/utils/todoPrisma";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<todo[]>([]);
  useEffect(() => {
    const todosUpdate = async () => {
      const tasks = await getTodos();
      setTodos(tasks);
    };

    todosUpdate();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <section className="flex flex-row w-full justify-between">
        <h1 className="font-bold text-xl">Liste des taches</h1>
        <Link
          href={"/todo"}
          className=" bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Créer une tâche
        </Link>
      </section>
      <section className="flex flex-col gap-3 items-start justify-start w-full">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </section>
    </main>
  );
}
