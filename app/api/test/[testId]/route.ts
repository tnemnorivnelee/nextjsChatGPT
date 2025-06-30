import { NextResponse } from "next/server";

type Params = Promise<{
  testId: string;
}>;

export async function POST(request: Request, segmentData: { params: Params; }) {
  const userData = await request.json();
  const params = await segmentData.params;

  console.log("server user data:", userData, "testId:", params.testId);

  return NextResponse.json({ message: "사용자가 성공적으로 생성 되었습니다." });
}