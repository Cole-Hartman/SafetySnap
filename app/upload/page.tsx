import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import ImageUploader from "@/components/image-uploader";

export default async function ProtectedPage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect("/sign-in");
	}

	return (
		<div className="flex flex-col gap-2 items-start">
			<h2 className="font-bold text-2xl mb-4">Image Upload</h2>
			<ImageUploader user={user} />
		</div>
	);
}
