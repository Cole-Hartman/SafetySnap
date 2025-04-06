import Footer from "../../components/footer.tsx";
import Header from "@/components/header";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import DeployButton from "@/components/deploy-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <>
      <header className="container mx-auto py-4 px-4 flex justify-between items-center gap-20">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-amber-500" />
          <Link href="/">
            <span className="font-bold text-2xl text-slate-800">
              SafetySnap
            </span>
          </Link>
        </div>
        <HeaderAuth />
      </header>

      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="flex flex-col gap-20 max-w-full h-full">{children}</div>
      </div>
    </>
  );
}
