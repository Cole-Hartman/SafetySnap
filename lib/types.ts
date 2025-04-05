export interface Violation {
	title: string
	description: string
	severity: "high" | "medium" | "low"
	regulation?: string
}

export interface Ticket {
	id: string
	title: string
	description: string
	status: "critical" | "warning" | "compliant" | "pending"
	location: string
	createdAt: string
	imageUrl: string
	violations: Violation[]
	recommendations?: string[]
	assignedTo?: string
}

