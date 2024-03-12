"use server"
import { todo } from "@/types";
import prisma from "./prisma";

export async function createTodo(title : string, completed : boolean){
    return await prisma.todo.create({
        data:{
            title : title,
            completed : completed
        }
    })
}

export async function updateTodo(todo:todo){
    return await prisma.todo.update({
        where:{
            id: todo.id
        },
        data:{
            title : todo.title,
            completed : todo.completed
        }
    })
}

export async function deleteTodo(todo:todo){
    return await prisma.todo.delete({
        where: {
            id : todo.id
        }
    })
}

export async function getTodos(){
    return await prisma.todo.findMany()
}

export async function getTodo(id:number) {
    return await prisma.todo.findFirst({
        where: {
            id : id
        }
    })
}