export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      대시보드 레이아웃
      {children}
    </div>
  );
}