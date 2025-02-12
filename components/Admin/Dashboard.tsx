import StatsCard from "./StatsCard";
import OrdersTable from "@/components/Admin/OrderTable";
import { ShoppingCart, Users, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard title="Total Orders" value="1,230" icon={<ShoppingCart size={24} />} />
        <StatsCard title="Total Customers" value="3,450" icon={<Users size={24} />} />
        <StatsCard title="Revenue" value="$45,320" icon={<DollarSign size={24} />} />
      </div>

      {/* Recent Orders */}
      <OrdersTable />
    </div>
  );
};

export default Dashboard;
