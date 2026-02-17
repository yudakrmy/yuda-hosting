
import React from 'react';

const Support: React.FC = () => {
  const contacts = [
    {
      type: "Telegram",
      label: "@YudaKaramoy",
      desc: "Chat directly with Yuda",
      color: "blue",
      icon: "fa-telegram-plane",
      link: "#"
    },
    {
      type: "WhatsApp",
      label: "082224434738",
      desc: "Fast response via WA",
      color: "green",
      icon: "fa-whatsapp",
      link: "#"
    },
    {
      type: "Email Support",
      label: "yudakaramoy21...",
      desc: "Send detailed inquiries",
      color: "orange",
      icon: "fa-envelope",
      link: "#"
    },
    {
      type: "Open Ticket",
      label: "Submit Request",
      desc: "Technical issues",
      color: "slate",
      icon: "fa-ticket-alt",
      link: "#"
    }
  ];

  return (
    <section className="bg-slate-50 py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">We are always here to help your business</p>
            <h2 className="text-5xl font-black text-slate-900 mb-8 font-display leading-[1.1]">
              Yuda Karamoy<br/><span className="text-primary">24/7 Support</span>
            </h2>
            
            <div className="flex gap-10 mt-12">
              {[
                { label: "24/7 SUPPORT", icon: "fa-headset" },
                { label: "100% SATISFACTION", icon: "fa-smile" },
                { label: "99.9% UPTIME", icon: "fa-server" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-20 h-20 rounded-full border-2 border-slate-200 flex items-center justify-center mb-4 transition-all group-hover:border-primary group-hover:bg-primary/5">
                    <i className={`fas ${stat.icon} text-3xl text-slate-400 transition-colors group-hover:text-primary`}></i>
                  </div>
                  <span className="text-[10px] font-black text-slate-500 leading-tight tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((contact, i) => (
              <a 
                key={i} 
                href={contact.link}
                className={`bg-white p-8 rounded-2xl border border-slate-100 flex items-start gap-5 hover:shadow-xl transition-all group overflow-hidden relative`}
              >
                <div className={`bg-${contact.color}-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0 shadow-lg shadow-${contact.color}-500/20 z-10`}>
                  <i className={`fab ${contact.icon} text-2xl`}></i>
                </div>
                <div className="z-10">
                  <h4 className="font-black text-slate-900 text-lg mb-1">{contact.type}</h4>
                  <p className="text-xs text-slate-500 mb-2 font-medium">{contact.desc}</p>
                  <p className={`text-sm text-${contact.color}-600 font-extrabold`}>{contact.label}</p>
                </div>
                <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity`}>
                   <i className={`fab ${contact.icon} text-7xl text-${contact.color}-500`}></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
