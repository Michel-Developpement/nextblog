// http://localhost:3000/api/categorys
import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

// GET POST PUT
export const GET = async () => {
  try {
    const categorys = await prisma.catergory.findMany();
    return NextResponse.json(categorys, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
