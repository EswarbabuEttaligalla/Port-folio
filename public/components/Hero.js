function Hero() {
  try {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-2 mt-12">{/* moved down and removed float animation */}
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1 shadow-2xl transform translate-y-2">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_1504cb5cf8000001/20739096-a390-4cef-bfeb-1df4a203bb41.jpeg" 
                  alt="Eswar Babu Ettaligalla" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Eswar Babu</span>
            <br />
            <span className="text-[var(--text-primary)] font-extrabold text-slate-900 dark:text-slate-100 drop-shadow-sm">Ettaligalla</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 leading-relaxed">Computer Science Undergraduate</p>
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                  // Open the resume file placed in the Vite public folder so it's served at /trickle/assets/resume.pdf
                  const resumePath = '/trickle/assets/resume.pdf';
                  window.open(resumePath, '_blank', 'noopener');
                }}
                className="btn-primary flex items-center space-x-2"
            >
              <div className="icon-download text-lg"></div>
              <span>View Resume</span>
            </button>
            
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary flex items-center space-x-2"
            >
              <div className="icon-mail text-lg"></div>
              <span>Get In Touch</span>
            </button>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a href="mailto:eswarbabuettaligalla@gmail.com" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
            </a>
            <a href="https://www.linkedin.com/in/eswar-babu-ettaligalla-1b4406382/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <div className="icon-linkedin text-xl text-[var(--primary-color)]"></div>
            </a>
            <a href="https://github.com/EswarbabuEttaligalla" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <div className="icon-github text-xl text-[var(--primary-color)]"></div>
            </a>
            <a href="tel:+919063980608" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <div className="icon-phone text-xl text-[var(--primary-color)]"></div>
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
