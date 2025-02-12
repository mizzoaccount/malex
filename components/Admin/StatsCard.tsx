interface StatsCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
  }
  
  const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
        <div className="p-4 bg-blue-100 text-blue-600 rounded-full">{icon}</div>
        <div>
          <p className="text-gray-500">{title}</p>
          <h3 className="text-xl font-bold">{value}</h3>
        </div>
      </div>
    );
  };
  
  export default StatsCard;
  