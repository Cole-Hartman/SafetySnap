// app/dashboard/layout.tsx (Dashboard layout)

export default function DashboardLayout({ children }) {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="flex flex-col gap-20 max-w-full h-full">{children}</div>
    </div>
  );
}
