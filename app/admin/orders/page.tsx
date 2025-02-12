import { CheckCircle, Clock, XCircle } from "lucide-react";
import { JSX } from "react";

type OrderStatus = "Completed" | "Pending" | "Cancelled";

interface Order {
  id: string;
  customer: string;
  total: string;
  status: OrderStatus;
}

const orders: Order[] = [
  { id: "#1001", customer: "John Doe", total: "$250", status: "Completed" },
  { id: "#1002", customer: "Jane Smith", total: "$120", status: "Pending" },
  { id: "#1003", customer: "Alice Brown", total: "$340", status: "Cancelled" },
];

const statusColors: Record<OrderStatus, string> = {
  Completed: "text-green-600 bg-green-100",
  Pending: "text-yellow-600 bg-yellow-100",
  Cancelled: "text-red-600 bg-red-100",
};

const statusIcons: Record<OrderStatus, JSX.Element> = {
  Completed: <CheckCircle size={18} className="text-green-600" />,
  Pending: <Clock size={18} className="text-yellow-600" />,
  Cancelled: <XCircle size={18} className="text-red-600" />,
};

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Order ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Total</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">{order.total}</td>
              <td className="p-3 flex items-center gap-2">
                {statusIcons[order.status]}
                <span className={`px-2 py-1 rounded-md ${statusColors[order.status]}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
