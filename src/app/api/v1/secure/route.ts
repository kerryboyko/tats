import { NextResponse } from "next/server";

import checkAuth from "@/utils/checkAuth";
export async function GET() {
  const userData = await checkAuth();
  return NextResponse.json(userData);
}
