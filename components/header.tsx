import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import DeployButton from "@/components/deploy-button";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function Header() {
	return (
		<header className="container mx-auto py-4 px-4 flex justify-between items-center">
			<div className="flex items-center gap-2">
				<Shield className="h-8 w-8 text-amber-500" />
				<span className="font-bold text-2xl text-slate-800">SafetySnap</span>
			</div>
			<nav className="hidden md:flex gap-6">
				<Link href="#features" className="text-slate-700 hover:text-amber-600 font-medium">
					Features
				</Link>
				<Link href="#how-it-works" className="text-slate-700 hover:text-amber-600 font-medium">
					How It Works
				</Link>
				<Link href="#about" className="text-slate-700 hover:text-amber-600 font-medium">
					About
				</Link>
			</nav>
			<HeaderAuth />
		</header >
	)
}



