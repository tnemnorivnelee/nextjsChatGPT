import { NextRequest } from "next/server";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request: NextRequest) {
  const randomDelay = Math.floor(Math.random() * 5000);
  console.log("GET 요청 처리 중, 지연 시간:", randomDelay, "ms");

  throw new Error("테스트용 에러 발생!"); // 인위적으로 에러를 발생시킴

  //await delay(randomDelay);

  //return NextResponse.json({ data: `${randomDelay}만에 응답완료!` });
}

