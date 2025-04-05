import { Shield } from "lucide-react"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className="bg-slate-800 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<div className="flex items-center gap-2 mb-4">
							<Shield className="h-8 w-8 text-amber-400" />
							<span className="font-bold text-2xl">SafetySnap</span>
						</div>
						<p className="text-slate-300">AI-powered construction safety compliance for the modern worksite.</p>
					</div>

					<div>
						<h3 className="font-bold text-lg mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-slate-300 hover:text-amber-400">
									Home
								</Link>
							</li>
							<li>
								<Link href="#features" className="text-slate-300 hover:text-amber-400">
									Features
								</Link>
							</li>
							<li>
								<Link href="#how-it-works" className="text-slate-300 hover:text-amber-400">
									How It Works
								</Link>
							</li>
							<li>
								<Link href="#" className="text-slate-300 hover:text-amber-400">
									Pricing
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold text-lg mb-4">Resources</h3>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-slate-300 hover:text-amber-400">
									OSHA Guidelines
								</Link>
							</li>
							<li>
								<Link href="#" className="text-slate-300 hover:text-amber-400">
									Safety Blog
								</Link>
							</li>
							<li>
								<Link href="#" className="text-slate-300 hover:text-amber-400">
									Case Studies
								</Link>
							</li>
							<li>
								<Link href="#" className="text-slate-300 hover:text-amber-400">
									Support
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold text-lg mb-4">Contact</h3>
						<ul className="space-y-2">
							<li className="text-slate-300">info@safetysnap.com</li>
							<li className="text-slate-300">1-800-SAFETY</li>
							<li className="text-slate-300">123 Construction Ave, Building 4, Suite 101</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
					<p>© {new Date().getFullYear()} SafetySnap. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
