
import React from 'react';

const GrowDigital: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-slate-900 font-display leading-tight">
            GROW Digital<br/>
            <span className="text-slate-500 font-bold">Supporting Innovation, Driving Global Growth</span>
          </h2>
          <p className="mt-6 text-slate-600 max-w-3xl text-lg leading-relaxed">
            Starting from Business Landing Pages, Commerce, Digital Marketing, to Enterprise Apps, PT. YUDZ MAJU BERSAMA is present as a digital ecosystem based on modern tech that supports businesses of all scales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:h-[480px]">
          {/* Main Card A */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between border-l-8 border-primary overflow-hidden relative">
            <div className="relative z-10">
              <div className="text-primary font-black text-3xl mb-4">A</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Custom Development</h3>
              <p className="text-slate-600 mb-8 text-base leading-relaxed max-w-md">
                Tailored web solutions perfect for your specific business needs. We use the latest stack including Next.js, Tailwind CSS, and cloud serverless architecture.
                <br/><br/>
                Includes free consultation, architecture planning, and 1 month of support.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/25">
                Build Website Now
              </button>
            </div>
            <div className="mt-8 md:absolute md:bottom-0 md:-right-10 md:w-3/5">
              <img 
                alt="Development Preview" 
                className="rounded-tl-2xl shadow-2xl transform rotate-1"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwqRNafx4XKiPUvVoVu6AWAO5wRyMpfghvcnLRbCCCI08zzIqqgFv6ugAhvSJ9VCagwXfWcKF4iy9i-qgBPQN-llgoyqeuD68kuwEM2FOEkWeTEjEI_rJVeT3te7gtOjkGzZKfVbISQ9KPVbcDYFOKhk8OmmUbeuUjpgtcrfQ832-_c7uXNXYGIbbVtk5E3EU3naKX4ycf1-b-aOfHebe1e5N3eYyZLfvUG6cQ7E5UBsPlmzn11Cj4NhhEg2N8pTDkBaN9ATH27w"
              />
            </div>
          </div>

          {/* Service B */}
          <div className="bg-blue-50/50 rounded-3xl p-8 border border-slate-200 hover:bg-white hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between">
            <div className="text-blue-500 font-black text-3xl mb-4">B</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">UI/UX Design</h3>
              <div className="mt-6 overflow-hidden rounded-xl bg-slate-100">
                <img 
                  alt="Design Preview" 
                  className="w-full h-24 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUZTQ3ttPq-J7rwS8X9KcowZIOacPUNzE8xN3sLk8kULEjlyZkz5pfU5PMBvvKPvP2QmnYRdg3kc_XU6KFLXsdiZXmv-PbsWLJCwZitEjpGCvJvdG4VuLmMRmMJkmR5Pxy0x4jMLeP5xspcpIclNQPOH0HbMCe2LD65uuzmObu1FqD5NI2gH9i1B_eSighXny_uccxa07_dVnpGTpDyVc2Oj8pkEi9wQoRMfwPay5h_w0tFRzFUyKtMtxbOwy1otxsFfjEl1tVrw"
                />
              </div>
            </div>
          </div>

          {/* Service C & D Column */}
          <div className="flex flex-col gap-4">
             <div className="bg-blue-50/50 rounded-3xl p-8 border border-slate-200 hover:bg-white hover:shadow-xl transition-all cursor-pointer group flex-1 flex flex-col justify-between">
              <div className="text-blue-500 font-black text-3xl mb-2">C</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">SEO & Marketing</h3>
                <div className="mt-4 overflow-hidden rounded-xl bg-slate-100">
                  <img alt="SEO" className="w-full h-16 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1OokP2qqOCjk1fRbeuYdjtPZQHPRNSAG8zoBdnNYOmISY2Cyu03mZmxqjBDN6e0DC9xOMBo91tmCnMhvuoYxomCAcb4B5Y9NXTQXip52QzGkdPgeGDS8ubS6tLy6DpMn7rKh75t9oW6EG9BW95WTMQT-s8N1y5wqgoBbizsxlH14Dhh1jHYMZChillc88HkfzCr85FQfxT-MWOBOzqPcuGxqB_WJ8GQeOUMawQJfYWSwy3oGKEDe5NVMQXKRuZF5pa2VzBDVkJQ" />
                </div>
              </div>
            </div>
             <div className="bg-blue-50/50 rounded-3xl p-8 border border-slate-200 hover:bg-white hover:shadow-xl transition-all cursor-pointer group flex-1 flex flex-col justify-between">
              <div className="text-blue-500 font-black text-3xl mb-2">D</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Cloud Hosting</h3>
                <div className="mt-4 overflow-hidden rounded-xl bg-slate-100">
                   <img alt="Cloud" className="w-full h-16 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUhdZmUBZmK_LfG6nSyJVOA7EUjfa-2ugDuIHizS21ojv5AaD-tO2fi0VyQfLWPSghNaXM1qLODj3uEViVs0fguFBhj3STsAPryCaAzmf4m6B5BSRVmT-Fsl-jJRPGgMDiwLY-HjwVRIerZK9RrvDQoKlZyO7b5GzmSxLj6f1Y3pPPjNmBW4hWtTWv4dUV3UkpcwdUvJT7de0Vwx26Ez7bLJTFPnJSaHCbOvmFG5v5iERggh4OlnAZ2uEMrIwAF4Tk4hJIvy-_qQ" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowDigital;
