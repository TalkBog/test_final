import { ModifyTodoForm } from "@/componants/form";
import { NextPageProps, todo } from "@/types";
import { createTodo, getTodo, updateTodo } from "@/utils/todoPrisma";
import Link from "next/link";
import { notFound } from "next/navigation";

type props = {
  id: number;
};
export default async function UpdateTodo({ params }: NextPageProps<props>) {
  const todo = await getTodo(params.id);
  if (!todo) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <section className="flex flex-row w-full justify-between">
        <h1 className="font-bold text-xl">Modifier une tâche</h1>
        <Link
          href={"/"}
          className=" bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Retour a l'accueil
        </Link>
      </section>
      <section className="w-full">
        <ModifyTodoForm todo={todo} />
      </section>
    </main>
  );
}
