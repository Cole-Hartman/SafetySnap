import type { Ticket } from "./types"

export const mockTickets: Ticket[] = [
	{
		id: "ticket-001",
		title: "Exposed Electrical Wiring",
		description:
			"Exposed electrical wiring found in the warehouse near loading dock B. This poses a serious electrical hazard and violates OSHA electrical safety standards.",
		status: "critical",
		location: "Warehouse - Loading Dock B",
		createdAt: "2025-04-02T14:30:00Z",
		imageUrl: "/placeholder.svg?height=300&width=400",
		violations: [
			{
				title: "Exposed Electrical Wiring",
				description: "Electrical wires are exposed and accessible to workers, creating a shock hazard.",
				severity: "high",
				regulation: "OSHA 29 CFR 1910.303(g)(2)",
			},
			{
				title: "Improper Conduit Installation",
				description: "Electrical conduit is damaged and not properly secured to the wall.",
				severity: "medium",
				regulation: "OSHA 29 CFR 1910.305(a)",
			},
		],
		recommendations: [
			"Immediately secure the area and restrict access",
			"Schedule a licensed electrician to properly enclose all exposed wiring",
			"Install proper conduit and junction boxes",
			"Conduct a full electrical safety inspection of the warehouse",
		],
	},
	{
		id: "ticket-002",
		title: "Missing Machine Guards",
		description:
			"CNC machine #4 is operating without proper safety guards. The rotating parts are exposed, creating a potential entanglement hazard for operators.",
		status: "critical",
		location: "Manufacturing Floor - Station 4",
		createdAt: "2025-04-03T09:15:00Z",
		imageUrl: "/placeholder.svg?height=300&width=400",
		violations: [
			{
				title: "Missing Machine Guards",
				description: "Machine is operating without required safety guards, exposing moving parts.",
				severity: "high",
				regulation: "OSHA 29 CFR 1910.212(a)(1)",
			},
		],
		recommendations: [
			"Immediately stop using the machine until guards are installed",
			"Order and install appropriate machine guards",
			"Retrain operators on machine safety protocols",
			"Implement a regular machine guard inspection program",
		],
	},
	{
		id: "ticket-003",
		title: "Improper Ladder Usage",
		description:
			"Employee observed using a damaged ladder to access inventory on high shelves in the storage room. The ladder has a cracked rung and is not properly secured.",
		status: "warning",
		location: "Storage Room - Aisle 3",
		createdAt: "2025-04-04T11:45:00Z",
		imageUrl: "/placeholder.svg?height=300&width=400",
		violations: [
			{
				title: "Damaged Ladder in Use",
				description: "Employee using ladder with visible structural damage (cracked rung).",
				severity: "medium",
				regulation: "OSHA 29 CFR 1910.23(b)",
			},
			{
				title: "Unsecured Ladder",
				description: "Ladder not secured against displacement during use.",
				severity: "medium",
				regulation: "OSHA 29 CFR 1910.23(c)",
			},
		],
		recommendations: [
			"Remove damaged ladder from service immediately",
			"Provide proper ladder safety training to all warehouse staff",
			"Implement a ladder inspection program",
			"Consider installing a rolling ladder system for inventory access",
		],
	},
	{
		id: "ticket-004",
		title: "Proper PPE Usage",
		description:
			"All employees in the chemical handling area are wearing appropriate PPE including face shields, chemical-resistant gloves, and aprons as required by safety protocols.",
		status: "compliant",
		location: "Chemical Processing - Room 2",
		createdAt: "2025-04-05T13:20:00Z",
		imageUrl: "/placeholder.svg?height=300&width=400",
		violations: [],
		recommendations: [
			"Continue current PPE compliance monitoring",
			"Consider implementing a recognition program for consistent safety compliance",
		],
	},
	{
		id: "ticket-005",
		title: "Blocked Fire Exit",
		description:
			"Emergency exit in the east corridor is partially blocked by storage boxes and equipment. This creates a potential evacuation hazard in case of emergency.",
		status: "warning",
		location: "East Corridor - Building A",
		createdAt: "2025-04-05T15:10:00Z",
		imageUrl: "/placeholder.svg?height=300&width=400",
		violations: [
			{
				title: "Obstructed Emergency Exit",
				description: "Fire exit pathway is partially blocked, reducing evacuation efficiency.",
				severity: "medium",
				regulation: "OSHA 29 CFR 1910.37(a)(3)",
			},
		],
		recommendations: [
			"Immediately clear all obstructions from the exit pathway",
			"Mark the area with 'Keep Clear' floor markings",
			"Conduct staff training on emergency exit requirements",
			"Schedule regular inspections of all emergency exits",
		],
	},
	{
		id: "ticket-006",
		title: "Proper Lockout/Tagout Procedures",
		description:
			"Maintenance team observed following correct lockout/tagout procedures while servicing the conveyor system. All energy sources properly isolated and tagged.",
		status: "compliant",
		location: "Assembly Line - Section C",
		createdAt: "2025-04-06T10:05:00Z",
		imageUrl: "/placeholder.svg?height=300&width=400",
		violations: [],
		recommendations: [
			"Continue enforcing proper LOTO procedures",
			"Consider using this team's practices as a training example for other shifts",
		],
	},
]

