function Header() {
  try {
    const sections = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    };

    return (
  <header className="fixed top-0 w-full bg-[rgba(2,6,23,0.75)] backdrop-blur-sm z-50 border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_1504cb5cf8000001/20739096-a390-4cef-bfeb-1df4a203bb41.jpeg" 
                alt="Eswar Babu" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-white text-center">Eswar Babu Ettaligalla</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {sections.map(s => (
                <button key={s.id} onClick={() => scrollToSection(s.id)} className="px-3 py-2 text-md rounded-md hover:bg-gray-700 text-white transition-colors">{s.label}</button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <a href="mailto:eswarbabuettaligalla@gmail.com" className="flex items-center space-x-1 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-mail text-lg"></div>
              </a>
              <a href="https://www.linkedin.com/in/eswar-babu-ettaligalla-1b4406382/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-linkedin text-lg"></div>
              </a>
              <a href="https://github.com/EswarbabuEttaligalla" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-github text-lg"></div>
              </a>
              <a href="tel:+919063980608" className="flex items-center space-x-1 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-phone text-lg"></div>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
