import { Suspense } from "react";
import { TicketDashboard } from "@/components/ticket-dashboard";
import { DashboardSkeleton } from "@/components/dashboard-skeleton";

export default function Dashboard() {
  return (
    <div className="min-h-screen  w-full">
      <Suspense fallback={<DashboardSkeleton />}>
        <TicketDashboard />
      </Suspense>
    </div>
  );
}
