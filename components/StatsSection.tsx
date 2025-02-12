const StatsSection = () => {
    return (
      <section className="bg-gradient-to-b from-white to-cultured-50" aria-label="our stats">
        <div className="container mx-auto px-4">
          <ul 
            className="grid grid-cols-2 md:grid-cols-4 gap-y-9 gap-x-6 py-[45px] px-[30px] rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/Untitled.png')" }}
          >
            <StatItem number="7518" label="Completed Projects" />
            <StatItem number="3472" label="Happy Customers" />
            <StatItem number="2184" label="Expert Employees" />
            <StatItem number="4523" label="Awards Won" />
          </ul>
        </div>
      </section>
    );
  };
  
  const StatItem = ({ number, label }: { number: string; label: string }) => (
    <li className="text-center text-white">
      <p className="space-y-2">
        <span className="text-4xl font-bold block">{number}</span>
        <span className="text-base font-medium block">{label}</span>
      </p>
    </li>
  );
  
  export default StatsSection;