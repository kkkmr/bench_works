import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-[#1e3a8a] text-[#cbd5e1] px-6 py-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} bench_works. Crafted with 💙 by Karthik.
        </p>
        <ul className="flex gap-6 text-sm">
          <li><a href="/privacy" className="hover:text-[#f1f5f9] transition">Privacy</a></li>
          <li><a href="/terms" className="hover:text-[#f1f5f9] transition">Terms</a></li>
          <li><a href="/contact" className="hover:text-[#f1f5f9] transition">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
