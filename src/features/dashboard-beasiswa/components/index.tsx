import { LayoutDashboard } from "@/features/dashboard/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const DashboardBeasiswa = () => {
    return (
        <LayoutDashboard >
        <main>
        <section className="flex items-center justify-between">
          <div>
            <h3 className="text-xl">Data beasiswa</h3>
          </div>
          <Link to="/dashboard/scholarship/tambah">
            <Button variant="violet">Tambah Beasiswa</Button>
          </Link>
        </section>
        </main>
      </LayoutDashboard>
    )
}