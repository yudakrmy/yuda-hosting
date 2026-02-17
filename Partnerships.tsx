
import React from 'react';

const Partnerships: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-2 font-display">
            GROW Your Brand<br/>
            <span className="text-slate-500">Where Brands Grow Together</span>
          </h2>
          <p className="text-slate-500 text-lg">
            PT. YUDZ MAJU BERSAMA brings together partners, resellers, and business ecosystems in one collaborative path.
          </p>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
          <div className="p-10 lg:p-16 lg:w-3/5 flex flex-col justify-center relative z-20">
            <div className="inline-block bg-yellow-500/10 text-yellow-500 font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest mb-6 border border-yellow-500/20">
              Trusted Partner
            </div>
            <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">Meet Our Tech Partners</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
              We are supported by a wide network of technology partners, including cloud providers & verified security experts ready to help you run strategic business effectively. Find the right partner to develop digital solutions.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white font-black py-4 px-10 rounded-xl w-max transition-all shadow-2xl shadow-primary/40 transform hover:-translate-y-1">
              Learn More About Partnership
            </button>
          </div>
          <div className="lg:w-2/5 relative h-80 lg:h-auto min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10"></div>
            <img 
              alt="Team Collaboration" 
              className="w-full h-full object-cover opacity-50 mix-blend-luminosity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACAz0_7qfFKqUb3fUoQSIgAKW90ZhwYIFF2qSD35ahqic_bT-C0bCKea-VFUi0JOykW2uNJXc0ogzJ01CPVGX4meGEkdPd8Wj6Zs8Ymnf0ptJQYYD-sHFeXILl3VXzp81ewpmxPfkNI6mkRpLz9bL5UXheFa_LBVy5VjHAR9ZOs_0sxVfiUN3iXPzlfn3s2DxZlbvBL1WQUgSMI5amXhWsOD7iLa7AbfOVuSbZhclmb03IwwDxVGy4LwqwyTrEcLcwLqd7uGG-6w"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <i className="fas fa-project-diagram text-[120px] text-white opacity-10"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
