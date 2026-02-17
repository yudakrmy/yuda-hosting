
import React from 'react';

const TechStack: React.FC = () => {
  const techs = [
    { name: "React", icon: "fa-react", color: "#61DAFB" },
    { name: "Node.js", icon: "fa-node", color: "#339933" },
    { name: "Laravel", icon: "fa-laravel", color: "#FF2D20" },
    { name: "AWS", icon: "fa-aws", color: "#FF9900" },
    { name: "WordPress", icon: "fa-wordpress", color: "#21759B" }
  ];

  return (
    <div className="border-t border-slate-100 bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">Powered by Industry Standard Technology</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {techs.map((tech, i) => (
            <div key={i} className="flex items-center gap-3 transition-transform hover:scale-110">
              <i className={`fab ${tech.icon} text-5xl`} style={{ color: tech.color }}></i>
              <span className="text-slate-900 font-black text-2xl tracking-tight hidden md:block">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
