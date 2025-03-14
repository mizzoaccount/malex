const StatsSection = () => {
    return (
      <section className="bg-gradient-to-b from-white to-cultured-50" aria-label="our stats">
        <div className="container mx-auto px-4">
          <ul 
            className="grid grid-cols-2 md:grid-cols-4 gap-y-9 gap-x-6 py-[45px] px-[30px] rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/Untitled.png')" }}
          >
            <StatItem number="200+" label="Total Products" />
            <StatItem number="500+" label="Happy Customers" />
            <StatItem number="15+" label="Expert Employees" />
            <StatItem number="150+" label="Total Services" />
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