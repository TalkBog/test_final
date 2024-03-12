"use client";
import { CreateTodoForm } from "@/componants/form";
import { NextPageProps } from "@/types";
import prisma from "@/utils/prisma";
import { createTodo } from "@/utils/todoPrisma";
import Link from "next/link";
import { FormEventHandler, useState } from "react";

export default function CreateTodo() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <section className="flex flex-row w-full justify-between">
        <h1 className="font-bold text-xl">Créer une tâche</h1>
        <Link
          href={"/"}
          className=" bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Retour a l'accueil
        </Link>
      </section>
      <section className="w-full">
        <CreateTodoForm />
      </section>
    </main>
  );
}
