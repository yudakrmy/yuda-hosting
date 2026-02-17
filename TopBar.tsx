
import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-100 border-b border-slate-200 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-4 text-slate-600">
          <span><i className="fas fa-code mr-1"></i> GROW Digital with Yuda</span>
        </div>
        <div className="flex space-x-6 text-slate-600">
          <a className="hover:text-primary transition-colors flex items-center" href="tel:+6282224434738">
            <i className="fab fa-whatsapp mr-1 text-green-500"></i> 082224434738
          </a>
          <a className="hover:text-primary transition-colors flex items-center" href="#">
            <i className="fab fa-telegram mr-1 text-blue-500"></i> @YudaKaramoy
          </a>
          <a className="hover:text-primary transition-colors flex items-center" href="#">
            <i className="fas fa-headset mr-1"></i> Support
          </a>
          <a className="hover:text-primary transition-colors font-medium text-primary flex items-center" href="#">
            <i className="fas fa-user-lock mr-1"></i> Login Developer
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
