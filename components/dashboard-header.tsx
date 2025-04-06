import { Bell, Search, User } from "lucide-react";
import { signOutAction } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
	return (
		<header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b  px-6">
			<div className="flex items-center gap-4">
				<SidebarTrigger />
				<div className="hidden md:block">
				</div>
			</div>
			<div className="flex items-center gap-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" className="rounded-full">
							<User className="h-5 w-5" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={signOutAction}>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
