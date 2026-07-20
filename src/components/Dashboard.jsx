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

  // Animation Settings
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column p-0">
      
      {/* 1. FULLSCREEN MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="mobile-overlay"
          >
            <X size={40} className="position-absolute top-0 end-0 m-4" onClick={() => setIsMenuOpen(false)} />
            {menuItems.map((item, i) => (
              <motion.h1 
                key={i} 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="display-4 fw-bold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.h1>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. PREMIUM NAVBAR (Auron Layout) */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }}
        className="glass-nav mx-auto mt-4 px-4 py-2 d-flex align-items-center justify-content-between fixed-top shadow-lg"
        style={{ zIndex: 1000 }}
      >
        <div className="d-flex align-items-center gap-2 fw-bold text-white fs-5">
          <div className="bg-white rounded-1 p-1"><div className="bg-dark rounded-circle" style={{width:6, height:6}}></div></div>
          AURON
        </div>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex gap-4 small fw-medium text-secondary">
          {menuItems.map(item => (
            <span key={item} className="hover-white cursor-pointer" style={{cursor:'pointer'}}>{item}</span>
          ))}
        </div>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link text-white d-none d-sm-block text-decoration-none small">Login</button>
          <button className="btn btn-light rounded-pill px-4 fw-bold btn-sm shadow-sm" style={{background: '#a5f3fc'}}>Free trial</button>
          {/* Mobile Toggle */}
          <Menu className="d-lg-none" size={28} onClick={() => setIsMenuOpen(true)} />
        </div>
      </motion.nav>

      {/* 3. HERO SECTION */}
      <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center px-4 pt-5 mt-5">
        <motion.div 
          variants={fadeInUp} initial="initial" animate="animate"
          className="px-3 py-1 border border-secondary rounded-pill small text-info mb-4"
          style={{fontSize:'10px', letterSpacing:'2px', background: 'rgba(255,255,255,0.05)'}}
        >
          <Sparkles size={14} className="me-2" /> #1 PERFORMANCE BENCHMARKS
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="display-2 hero-title mb-4"
        >
          The #1 AI agent <br className="d-none d-md-block" /> for customer service
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-secondary fs-5 mb-5 mx-auto" style={{maxWidth: '650px'}}
        >
          Streamline your business with our intuitive, <br className="d-none d-md-block" /> scalable AI platform.
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="btn btn-lg rounded-pill px-5 py-3 fw-bold d-flex align-items-center gap-3 shadow-lg"
          style={{background: '#a5f3fc', border: 'none'}}
        >
          <div className="bg-black rounded-circle p-1"><Plus size={16} className="text-white" /></div>
          Start free trial
        </motion.button>
      </main>

      {/* 4. INFINITE SLIDER (Perfect Circle Fix) */}
      <div className="slider-container mb-5 mt-4">
        <motion.div 
          className="d-flex gap-5"
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...icons, ...icons, ...icons].map((Icon, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveIcon(i)}
              className={`icon-circle ${activeIcon === i ? 'active' : ''}`}
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default Dashboard;