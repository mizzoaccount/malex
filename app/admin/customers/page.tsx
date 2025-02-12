// app/admin/customers/page.tsx
import { Mail } from "lucide-react";

const customers = [
  { name: "John Doe", email: "john@example.com", lastOrder: "2024-02-01" },
  { name: "Jane Smith", email: "jane@example.com", lastOrder: "2024-02-05" },
  { name: "Alice Brown", email: "alice@example.com", lastOrder: "2024-01-28" },
];

export default function CustomersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Last Order</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.email} className="border-b">
              <td className="p-3">{customer.name}</td>
              <td className="p-3 flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                {customer.email}
              </td>
              <td className="p-3">{customer.lastOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
