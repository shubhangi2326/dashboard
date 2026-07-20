import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Sparkles, Monitor, Percent, Rocket, 
  CreditCard, Lightbulb, Lock, Search, Shield, Cpu, Menu, X 
} from 'lucide-react';

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  const menuItems = ["Home", "Capabilities", "AI Engine", "Research", "Pricing"];
  const icons = [Monitor, Percent, Rocket, CreditCard, Cpu, Lightbulb, Lock, Search, Shield, Sparkles];

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column p-0">
      
      {/* 1. Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="mobile-overlay"
          >
            <X size={40} className="position-absolute top-0 end-0 m-4 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
            {menuItems.map((item, i) => (
              <h1 key={i} className="display-4 fw-bold mb-4 cursor-pointer" onClick={() => setIsMenuOpen(false)}>{item}</h1>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Navbar */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }}
        className="glass-nav mx-auto mt-4 px-4 py-2 d-flex align-items-center justify-content-between fixed-top shadow-lg"
      >
        <div className="d-flex align-items-center gap-2 fw-bold text-white fs-4">
          <div className="bg-white rounded-1 p-1"><div className="bg-dark rounded-circle" style={{width:6, height:6}}></div></div>
          AURON
        </div>

        <div className="d-none d-lg-flex gap-4 small fw-medium">
          {menuItems.map(item => (
            <span key={item} className="hover-white cursor-pointer">{item}</span>
          ))}
        </div>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link text-white d-none d-sm-block text-decoration-none small hover-white">Login</button>
          <button className="btn btn-sm rounded-pill px-4 fw-bold" style={{background: '#a5f3fc'}}>Free trial</button>
          <Menu className="d-lg-none cursor-pointer" size={28} onClick={() => setIsMenuOpen(true)} />
        </div>
      </motion.nav>

      {/* 3. Hero Section */}
      <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center px-4 pt-5 mt-5">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="px-3 py-1 border border-secondary rounded-pill small text-info mb-4"
          style={{fontSize:'10px', letterSpacing:'2px', background: 'rgba(255,255,255,0.05)'}}
        >
          <Sparkles size={14} className="me-2" /> #1 PERFORMANCE BENCHMARKS
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="display-2 hero-title mb-4"
        >
          The #1 AI agent <br className="d-none d-md-block" /> for customer service
        </motion.h1>

        <motion.p className="text-secondary fs-5 mb-5 mx-auto" style={{maxWidth: '650px'}}>
          Transform your business with our intuitive neural engine. <br/> Scalable, fast, and remarkably intelligent.
        </motion.p>

        <button className="btn-premium-hero shadow-lg">
          <div style={{background:'black', borderRadius:'50%', padding:'5px', display:'flex'}}>
            <Plus size={16} className="text-white" />
          </div>
          <span>Start free trial</span>
        </button>
      </main>

      {/* 4. PERFECT CIRCLE ICON SLIDER */}
      <div className="slider-container mb-5 mt-4">
        <motion.div 
          className="d-flex gap-5"
          animate={{ x: [0, -1800] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...icons, ...icons, ...icons].map((Icon, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveIcon(i)}
              className={`icon-circle ${activeIcon === i ? 'active' : ''}`}
            >
              <Icon size={28} />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default Dashboard;