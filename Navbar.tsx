
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a className="flex-shrink-0 flex items-center gap-2" href="#">
              <img 
                alt="PT. YUDZ Logo" 
                className="h-10 w-auto rounded-full" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp_E4Z52vN0dP8WuyYJymvduG0DMRO4NenB7FGznyQeeZ0VebZHMokq2tBwyztd5l-nJ9gz72dDOuH173ZF5ANA4L9iXhe4mtyUN4LLVVKqCtZzfm7UWdlW9DOZk6jVkA8SjszLjrYAayPqcBm8B2YSr3F_gl0V19voF5ZqGF3HhL_YYbq_kSs9NTJGm9iqbHf1kHncKatEfN9U6TfXxRjCRvZ9wwKww9vUBuxA3IGqcW25iPVSG-W2jQCB_jjsjEqhlu8J-eGqg"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-slate-900">PT. YUDZ</span>
                <span className="text-[10px] tracking-wider text-slate-500 font-semibold uppercase">Maju Bersama</span>
              </div>
            </a>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a className="text-slate-900 hover:text-primary px-1 py-2 rounded-md text-sm font-semibold transition-colors border-b-2 border-primary" href="#">Home</a>
              <div className="relative group">
                <button className="text-slate-500 group-hover:text-primary px-1 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors">
                  Services <i className="fas fa-chevron-down ml-1 text-[10px]"></i>
                </button>
              </div>
              <a className="text-slate-500 hover:text-primary px-1 py-2 rounded-md text-sm font-medium transition-colors" href="#">Portfolio</a>
              <a className="text-slate-500 hover:text-primary px-1 py-2 rounded-md text-sm font-medium transition-colors" href="#">Contact</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex items-center rounded-md border border-slate-200 overflow-hidden">
              <input 
                className="block w-64 border-none py-2 pl-4 pr-10 text-sm focus:ring-0 placeholder-slate-400" 
                placeholder="Search services..." 
                type="text"
              />
              <button className="bg-primary px-4 py-2 text-white hover:bg-primary-dark transition-colors">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <button className="md:hidden text-slate-500 p-2">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
