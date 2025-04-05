import { Skeleton } from "@/components/ui/skeleton"

export function DashboardSkeleton() {
	return (
		<div className="p-6">
			<div className="mb-6 flex items-center justify-between">
				<Skeleton className="h-8 w-48" />
				<div className="flex items-center gap-2">
					<Skeleton className="h-9 w-[250px]" />
					<Skeleton className="h-9 w-20" />
				</div>
			</div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className="rounded-lg border p-4">
						<div className="mb-2 flex justify-between">
							<div>
								<Skeleton className="h-6 w-32 mb-1" />
								<Skeleton className="h-4 w-24" />
							</div>
							<Skeleton className="h-6 w-6 rounded-full" />
						</div>
						<Skeleton className="h-32 w-full rounded-md" />
						<div className="mt-2 space-y-1">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-3/4" />
						</div>
						<div className="mt-3 flex items-center justify-between">
							<Skeleton className="h-5 w-20" />
							<Skeleton className="h-8 w-16" />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

