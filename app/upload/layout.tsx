import Footer from "../../components/footer.tsx"
import Header from "@/components/header"

export default function DashboardLayout({ children }) {
	return (
		<div className="flex-1 w-full flex flex-col gap-20 items-center">
			<Header />
			<div className="flex flex-col gap-20 max-w-full h-full">
				{children}
			</div>
		</div>
	)
}
