import UpdateTodo from "@/app/todo/[todoId]/page";
import { NextPageProps, todo } from "@/types";
import { createTodo, getTodo, getTodos, updateTodo } from "@/utils/todoPrisma";
import { time } from "console";
import { NextRequest, NextResponse } from "next/server";

type paramsRequest = {
  title?: string;
  completed?: string;
};

type props = {
    todoId:number
}


export async function GET({params, searchParams} : NextPageProps<props>) {
    const paramsModify: paramsRequest = {
        title: undefined,
        completed: undefined,
      };
    if(searchParams){
       
    paramsModify.title = searchParams["title"] as string ?? undefined
    paramsModify.completed =  searchParams["completed"] as string ?? undefined

    }
  

  if (paramsModify.title) {
    const newTodo :todo= {
        id: params.todoId,
        title : paramsModify.title,
        completed : paramsModify.completed ? paramsModify.completed === "true" : false,
        createdAt : new Date()

    }
    const todo = await updateTodo(newTodo
    );
    return NextResponse.json({
      todo,
    });
  }
  const todo = await getTodo(params.todoId);
  return NextResponse.json({
    todo,
  });
}