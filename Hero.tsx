
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-green-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-xs font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              PT. YUDZ MAJU BERSAMA
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-display leading-tight">
              <span className="block mb-2">Expert Web Development</span>
              <span className="text-primary">Solutions by Yuda</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              Transform your business with high-performance websites, custom web applications, and reliable digital infrastructure. Built for speed, security, and growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                Get Started
              </a>
              <a href="#" className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all">
                View Portfolio
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Mock IDE Window */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center px-4 py-3 border-b border-slate-700 bg-slate-900/50">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[11px] text-slate-400 font-mono tracking-tighter">yuda_karamoy_dev.tsx</div>
              </div>
              <div className="p-6 font-mono text-sm leading-6 text-slate-300 overflow-x-auto">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">PT_YUDZ</span> = {'{'}</p>
                <p className="pl-4">developer: <span className="text-green-400">"Yuda Karamoy"</span>,</p>
                <p className="pl-4">expertise: [<span className="text-green-400">"Fullstack"</span>, <span className="text-green-400">"DevOps"</span>, <span className="text-green-400">"UI/UX"</span>],</p>
                <p className="pl-4">mission: <span className="text-green-400">"Empowering Business Growth"</span>,</p>
                <p className="pl-4">status: <span className="text-yellow-400">"Ready to Code"</span></p>
                <p>{'};'}</p>
                <br/>
                <p><span className="text-purple-400">async function</span> <span className="text-blue-400">buildFuture</span>() {'{'}</p>
                <p className="pl-4"><span className="text-purple-400">return await</span> PT_YUDZ.createAmazingWeb();</p>
                <p>{'}'}</p>
              </div>
            </div>

            {/* Success Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce shadow-green-500/10" style={{ animationDuration: '4s' }}>
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <i className="fas fa-check-circle text-xl"></i>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Project Success</p>
                <p className="font-extrabold text-slate-800 text-sm">100% Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
