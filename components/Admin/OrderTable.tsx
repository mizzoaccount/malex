const dummyOrders = [
    { id: 1, customer: "John Doe", status: "Shipped", amount: "$120.50" },
    { id: 2, customer: "Jane Smith", status: "Processing", amount: "$89.99" },
    { id: 3, customer: "Mark Johnson", status: "Delivered", amount: "$45.00" },
  ];
  
  const OrdersTable = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Customer</th>
              <th className="py-2">Status</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2">{order.customer}</td>
                <td className="py-2">{order.status}</td>
                <td className="py-2">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default OrdersTable;
  