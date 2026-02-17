
import React from 'react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: "Landing Pages",
      desc: "High-converting landing pages designed to capture leads and showcase your product.",
      icon: "fa-laptop-code",
      color: "blue",
      badge: "HOT"
    },
    {
      title: "E-Commerce",
      desc: "Complete online store solutions with payment gateway integration and inventory management.",
      icon: "fa-shopping-cart",
      color: "green"
    },
    {
      title: "Web Apps",
      desc: "Custom SaaS applications and internal tools built with modern frameworks like React & Node.",
      icon: "fa-layer-group",
      color: "purple"
    },
    {
      title: "Maintenance",
      desc: "Starting from",
      price: "Rp500.000",
      sub: "/mo",
      note: "Keep your site secure and updated.",
      isPrice: true
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl font-display">
            Comprehensive Solutions for Your Business Growth
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            From simple landing pages to complex enterprise systems, we have the tools and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`relative group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-1 ${service.isPrice ? 'bg-slate-50/50' : ''}`}>
              {service.badge && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded shadow-sm rotate-12 z-10">
                  {service.badge}
                </div>
              )}
              
              {!service.isPrice ? (
                <>
                  <div className={`w-14 h-14 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-6 text-${service.color}-600`}>
                    <i className={`fas ${service.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <a className="text-primary font-bold text-sm hover:underline inline-flex items-center" href="#">
                    Learn more <i className="fas fa-arrow-right ml-2 text-[10px]"></i>
                  </a>
                </>
              ) : (
                <div className="flex flex-col h-full justify-center items-center text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{service.desc}</p>
                  <div className="text-3xl font-black text-red-500 mb-3">
                    {service.price}
                    <span className="text-sm font-medium text-slate-400 ml-1">{service.sub}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{service.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
