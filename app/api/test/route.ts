import { NextRequest, NextResponse } from "next/server";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request: NextRequest) {
  const randomDelay = Math.floor(Math.random() * 5000);
  console.log("GET 요청 처리 중, 지연 시간:", randomDelay, "ms");

  await delay(randomDelay);

  return NextResponse.json({ data: `${randomDelay}만에 응답완료!` });
}

