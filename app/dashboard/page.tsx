import { Suspense } from "react";
import { TicketDashboard } from "@/components/ticket-dashboard";
import { DashboardSkeleton } from "@/components/dashboard-skeleton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {

	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect("/sign-in");
	}

	return (
		<div className="min-h-screen  w-full">
			<Suspense fallback={<DashboardSkeleton />}>
				<TicketDashboard />
			</Suspense>
		</div>
	);
}
