// components/Navigation.jsx (Enhanced)
// ... (previous code) ...

const Navigation = ({ activeSection, onSectionChange, isOpen, onToggle }) => {
  // ... (previous code) ...

  const menuItems = [
    { id: 'hero', label: 'HOME', icon: '◉' },
    { id: 'about', label: 'ABOUT', icon: '◼' },
    { id: 'projects', label: 'PROJECTS', icon: '◼' },
    { id: 'contact', label: 'CONTACT', icon: '◼' }
  ];

  return (
    <>
      {/* Menu Toggle Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 brutalist-btn-menu"
        onClick={onToggle}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.button>

      {/* Section Indicator */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-3 h-3 transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-brown-900 scale-150' 
                  : 'bg-brown-400 hover:bg-brown-600'
              }`}
              title={item.label}
            />
          ))}
        </div>
      </div>

      {/* Navigation Panel */}
      <motion.nav
        ref={navRef}
        className="fixed top-0 right-0 h-full w-80 bg-beige-200 border-l-4 border-brown-900 z-40"
        initial={{ x: '100%' }}
      >
        <div className="p-8 h-full flex flex-col justify-center">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`brutalist-nav-item flex items-center ${
                activeSection === item.id ? 'active' : ''
              }`}
              onClick={() => onSectionChange(item.id)}
              whileHover={{ x: -10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-brown-900 bg-opacity-50 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;