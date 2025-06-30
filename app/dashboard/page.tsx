export default async function DashboardPage() {
  const response = await fetch("http://localhost:3000/api/test");
  const data = await response.json();

  console.log("대시보드 페이지에서 API 응답:", data);

  return (
    <div>
      대시보드 페이지
    </div>
  );
}