
import React from 'react';

const WhyChoose: React.FC = () => {
  const points = [
    {
      title: "Trusted Brand in Tech",
      desc: "Recognized as a reliable solution provider for Web, App, and Cloud in the region. Trusted by startups and SMEs alike."
    },
    {
      title: "More than just Web Hosting",
      desc: "We are a one-stop shop for everything you need. From design to deployment and scaling your business online."
    },
    {
      title: "Reliable & Fast Service",
      desc: "Equipped with the latest digital solutions every day and direct support for your business needs and performance."
    },
    {
      title: "Proven Satisfaction",
      desc: "Products and services that we offer have successfully achieved customer satisfaction with high retention rates."
    }
  ];

  return (
    <section className="bg-blue-600 py-24 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
        <div className="w-96 h-96 border-[40px] border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-black mb-4 font-display">Why Choose PT. YUDZ MAJU BERSAMA?</h2>
        <p className="text-blue-100 mb-16 max-w-2xl text-lg">The most complete IT, App, Cloud, Digital and Ecommerce solution provider for you.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {points.map((point, i) => (
            <div key={i} className="relative">
              <h3 className="font-extrabold text-2xl mb-4 leading-tight">{point.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed opacity-90">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* Floating Support Rep Image */}
        <div className="hidden lg:block absolute -bottom-24 -right-10 w-[420px]">
          <img 
            alt="Yuda Karamoy Represented" 
            className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-t-full border-b-0 border-8 border-white/10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKkXT5cceq_a5lRcfeLD4P212YSEAwJlB_MHIT6WYdEf1b93yNGzAcdLCnoODFhi86u_Swpj3moAoi-E2wATZ-9vHqrChi8ozfSDER0LsvAm09Z0z_FCwI_KJT8pf-qE7CzeAoMsEWBXc4OxhajY5zjjHchTx3TD9l-nvl1tlFKoLq_2mBHduD0KGA94deRkWGQmxeP9srpJluZ6gYd-6NxX0EoZ3uKMNGdOBCjtqJwPI-R6i9N2612abGS4mvmDPx_lmxjW3G0A"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
