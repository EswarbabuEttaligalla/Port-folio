function Navigation() {
  try {
    const [activeSection, setActiveSection] = React.useState('home');

    const sections = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'contact', label: 'Contact' }
    ];

    React.useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    };

    return (
      <nav className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-2 py-2 shadow-lg border border-[var(--border-color)]" data-name="navigation" data-file="components/Navigation.js">
        <div className="flex space-x-1">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-[var(--primary-color)] text-white shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}
