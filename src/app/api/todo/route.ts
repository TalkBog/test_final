import { createTodo, getTodos } from "@/utils/todoPrisma";
import { time } from "console";
import { NextRequest, NextResponse } from "next/server";

type paramsRequest = {
  title?: string;
  completed?: string;
};

export async function GET(request: NextRequest) {
  const params: paramsRequest = {
    title: request.nextUrl.searchParams.get("title") ?? undefined,
    completed: request.nextUrl.searchParams.get("completed") ?? undefined,
  };

  if (params.title) {
    const todo = await createTodo(
      params.title,
      params.completed ? params.completed === "true" : false
    );
    return NextResponse.json({
      todo,
    });
  }
  const todos = await getTodos();
  return NextResponse.json({
    todos,
  });
}
