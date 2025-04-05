"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle, CheckCircle, ChevronRight, Clock, MapPin, XCircle } from "lucide-react"
import type { Ticket } from "@/lib/types"
import { formatDate } from "@/lib/utils"

interface TicketListProps {
	tickets: Ticket[]
}

export function TicketList({ tickets }: TicketListProps) {
	const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "critical":
				return <XCircle className="h-5 w-5 text-red-500" />
			case "warning":
				return <AlertTriangle className="h-5 w-5 text-yellow-500" />
			case "compliant":
				return <CheckCircle className="h-5 w-5 text-green-500" />
			default:
				return <Clock className="h-5 w-5 text-gray-500" />
		}
	}

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "critical":
				return <Badge variant="destructive">Critical</Badge>
			case "warning":
				return (
					<Badge variant="outline" className="border-amber-500 text-amber-700 bg-amber-50">
						Warning
					</Badge>
				)
			case "compliant":
				return (
					<Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
						Compliant
					</Badge>
				)
			default:
				return <Badge variant="outline">Pending</Badge>
		}
	}

	return (
		<>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{tickets.length === 0 ? (
					<div className="col-span-full flex h-40 items-center justify-center rounded-lg border border-dashed">
						<div className="text-center">
							<p className="text-sm text-gray-500">No tickets found</p>
						</div>
					</div>
				) : (
					tickets.map((ticket) => (
						<Card key={ticket.id} className="overflow-hidden">
							<CardHeader className="pb-2">
								<div className="flex justify-between">
									<div>
										<CardTitle className="line-clamp-1">{ticket.title}</CardTitle>
										<CardDescription className="flex items-center gap-1 text-xs">
											<MapPin className="h-3 w-3" /> {ticket.location}
										</CardDescription>
									</div>
									{getStatusIcon(ticket.status)}
								</div>
							</CardHeader>
							<CardContent className="pb-2">
								<div className="relative h-32 w-full overflow-hidden rounded-md">
									<img
										src={ticket.imageUrl || "/placeholder.svg"}
										alt={ticket.title}
										className="h-full w-full object-cover"
									/>
								</div>
								<p className="mt-2 line-clamp-2 text-sm text-gray-600">{ticket.description}</p>
							</CardContent>
							<CardFooter className="flex items-center justify-between pt-0">
								<div className="flex items-center gap-2">
									{getStatusBadge(ticket.status)}
									<span className="text-xs text-gray-500">{formatDate(ticket.createdAt)}</span>
								</div>
								<Button variant="ghost" size="sm" className="gap-1" onClick={() => setSelectedTicket(ticket)}>
									Details
									<ChevronRight className="h-4 w-4" />
								</Button>
							</CardFooter>
						</Card>
					))
				)}
			</div>

			<Dialog open={!!selectedTicket} onOpenChange={(open) => !open && setSelectedTicket(null)}>
				{selectedTicket && (
					<DialogContent className="max-w-3xl">
						<DialogHeader>
							<DialogTitle className="flex items-center gap-2">
								{getStatusIcon(selectedTicket.status)}
								{selectedTicket.title}
							</DialogTitle>
							{/* Fix: Remove the div wrapper inside DialogDescription */}
							<DialogDescription className="flex items-center gap-1">
								<MapPin className="h-3 w-3" /> {selectedTicket.location} • {formatDate(selectedTicket.createdAt)}
							</DialogDescription>
						</DialogHeader>

						<div className="grid gap-4 md:grid-cols-2">
							<div>
								<img
									src={selectedTicket.imageUrl || "/placeholder.svg"}
									alt={selectedTicket.title}
									className="w-full rounded-md object-cover"
								/>
							</div>
							<div>
								<h3 className="mb-2 font-medium">Safety Analysis</h3>
								<div className="space-y-4">
									{selectedTicket.violations.map((violation, index) => (
										<div key={index} className="rounded-md border p-3">
											<div className="flex items-start gap-2">
												{violation.severity === "high" ? (
													<XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
												) : violation.severity === "medium" ? (
													<AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
												) : (
													<Clock className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" />
												)}
												<div>
													<h4 className="font-medium">{violation.title}</h4>
													<p className="text-sm text-gray-600">{violation.description}</p>
													{violation.regulation && (
														<p className="mt-1 text-xs text-gray-500">Regulation: {violation.regulation}</p>
													)}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{selectedTicket.recommendations && (
							<div>
								<h3 className="mb-2 font-medium">Recommendations</h3>
								<ul className="list-disc space-y-1 pl-5 text-sm">
									{selectedTicket.recommendations.map((rec, index) => (
										<li key={index}>{rec}</li>
									))}
								</ul>
							</div>
						)}

						<DialogFooter>
							<Button variant="outline" onClick={() => setSelectedTicket(null)}>
								Close
							</Button>
							<Button>Mark as Resolved</Button>
						</DialogFooter>
					</DialogContent>
				)}
			</Dialog>
		</>
	)
}
