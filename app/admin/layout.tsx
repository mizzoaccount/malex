// app/admin/layout.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Users, Settings, LayoutDashboard, Gauge } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { href: "/admin/orders", label: "Orders", icon: <ShoppingCart size={18} /> },
    { href: "/admin/customers", label: "Customers", icon: <Users size={18} /> },
    { href: "/admin/products", label: "Products", icon: <Gauge size={18} /> },
    { href: "/admin/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
              pathname === link.href ? "bg-blue-500" : "hover:bg-gray-700"
            }`}
          >
            {link.icon} {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
