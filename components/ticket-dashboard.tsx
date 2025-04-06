"use client";

import { useState } from "react";
import {
	SidebarProvider,
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarFooter,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TicketList } from "@/components/ticket-list";
import {
	Home,
	ClipboardList,
	Bell,
	Settings,
	PlusCircle,
	Search,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard-header";
import { mockTickets } from "@/lib/mockdata";
import Link from "next/link";

export function TicketDashboard() {
	const [searchQuery, setSearchQuery] = useState("");
	const [statusFilter, setStatusFilter] = useState<string | null>(null);

	const filteredTickets = mockTickets.filter((ticket) => {
		const matchesSearch =
			ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			ticket.location.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesStatus = statusFilter ? ticket.status === statusFilter : true;
		return matchesSearch && matchesStatus;
	});

	return (
		<SidebarProvider>
			<div className="flex h-screen">
				<Sidebar>
					<SidebarHeader>
						<Link href="/">
							<div className="flex items-center gap-2 px-4 py-2">
								<div className="flex h-8 w-8 items-center justify-center rounded-md text-amber-950">
									SS
								</div>
								<div className="font-semibold">SafetySnap</div>
							</div>
						</Link>
					</SidebarHeader>
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupLabel>Navigation</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton isActive>
											<Home />
											<span>Dashboard</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<ClipboardList />
											<span>All Tickets</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<Bell />
											<span>Notifications</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<Settings />
											<span>Settings</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>

						<SidebarGroup>
							<SidebarGroupLabel>Status Filters</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setStatusFilter(null)}
											isActive={statusFilter === null}
										>
											<span>All</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setStatusFilter("critical")}
											isActive={statusFilter === "critical"}
										>
											<div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
											<span>Critical</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setStatusFilter("warning")}
											isActive={statusFilter === "warning"}
										>
											<div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
											<span>Warning</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setStatusFilter("compliant")}
											isActive={statusFilter === "compliant"}
										>
											<div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
											<span>Compliant</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
					<SidebarFooter>
						<div className="p-2">
							<Button className="w-full flex items-center gap-2" size="sm">
								<PlusCircle className="h-4 w-4" />
								<span>New Scan</span>
							</Button>
						</div>
					</SidebarFooter>
				</Sidebar>

				<div className="flex-1 overflow-auto">
					<DashboardHeader />

					<main className="p-6">
						<div className="mb-6 flex items-center justify-between gap-10">
							<h1 className="text-2xl font-bold">Safety Tickets</h1>
							<div className="flex items-center gap-2">
								<Button className="bg-amber-400 hover:bg-amber-200">+ Create Ticket</Button>
								<div className="relative">
									<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
									<Input
										type="search"
										placeholder="Search tickets..."
										className="w-[250px] pl-8"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
									/>
								</div>
							</div>
						</div>

						<TicketList tickets={filteredTickets} />
					</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
