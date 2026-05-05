import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 bg-white relative z-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <span className="font-bold text-slate-900 text-lg">Aqib Hafeez</span>
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Aqib Hafeez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;