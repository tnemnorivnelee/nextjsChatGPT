import { Suspense } from "react";
import Card from "../../components/Card";

export default async function DashboardPage() {
  const response = await fetch("http://localhost:3000/api/test");
  const data = await response.json();

  console.log("대시보드 페이지에서 API 응답:", data);

  return (
    <div>
      <Suspense fallback={<div>card 1 loading...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div>card 2 loading...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div>card 3 loading...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div>card 4 loading...</div>}>
        <Card />
      </Suspense>
    </div>
  );
}