
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 border-t-8 border-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-white font-black text-xl mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">About PT. YUDZ</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Career</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Logo Kit</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-xl mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Web Development</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">App Development</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">E-Commerce</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">UI/UX Design</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Maintenance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-xl mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">SLA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-xl mb-6">Follow Us</h4>
            <div className="flex space-x-5 text-2xl mb-8">
              <a className="hover:text-primary transition-all transform hover:scale-110" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="hover:text-primary transition-all transform hover:scale-110" href="#"><i className="fab fa-instagram"></i></a>
              <a className="hover:text-primary transition-all transform hover:scale-110" href="#"><i className="fab fa-linkedin-in"></i></a>
              <a className="hover:text-primary transition-all transform hover:scale-110" href="#"><i className="fab fa-github"></i></a>
            </div>
            <div className="mt-6">
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3">Subscribe Newsletter</h4>
              <div className="flex bg-white/5 rounded-xl border border-white/10 p-1">
                <input 
                  className="w-full px-4 py-2 bg-transparent text-white rounded-l-md text-sm focus:outline-none placeholder-slate-500 border-none focus:ring-0" 
                  placeholder="Email address" 
                  type="email"
                />
                <button className="bg-primary hover:bg-primary-dark px-5 py-2 rounded-lg text-white text-xs font-black transition-colors uppercase">GO</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-widest">
          <div className="mb-6 md:mb-0">
            © 2024 PT. YUDZ MAJU BERSAMA. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6 opacity-30">
            <i className="fab fa-cc-visa text-3xl"></i>
            <i className="fab fa-cc-mastercard text-3xl"></i>
            <i className="fab fa-cc-paypal text-3xl"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
