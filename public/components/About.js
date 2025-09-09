function About() {
  try {
    return (
      <section id="about" className="section-padding bg-white dark:bg-slate-900" data-name="about" data-file="components/About.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                I'm a Computer Science undergraduate with a strong foundation in data structures, algorithms, and object-oriented programming. My passion lies in building scalable applications and solving complex problems through innovative solutions.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                With hands-on experience in full-stack development using Java, Python, C, and C++, I have expertise in REST APIs, databases, and cloud deployment. I thrive in collaborative environments and enjoy the challenge of hackathons and academic projects.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                I'm eager to apply my technical skills in Agile software engineering internships and contribute to meaningful projects that make a difference.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-[var(--primary-color)]">
                  <div className="icon-code text-lg"></div>
                  <span className="font-medium">Full-Stack Developer</span>
                </div>
                <div className="flex items-center space-x-2 text-[var(--primary-color)]">
                  <div className="icon-brain text-lg"></div>
                  <span className="font-medium">Problem Solver</span>
                </div>
                <div className="flex items-center space-x-2 text-[var(--primary-color)]">
                  <div className="icon-users text-lg"></div>
                  <span className="font-medium">Team Player</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-trophy text-2xl text-white"></div>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">2+</h3>
                <p className="text-[var(--text-secondary)]">Years of Coding</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-folder text-2xl text-white"></div>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">5+</h3>
                <p className="text-[var(--text-secondary)]">Projects Built</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-zap text-2xl text-white"></div>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">8+</h3>
                <p className="text-[var(--text-secondary)]">Technologies</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-target text-2xl text-white"></div>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">99%</h3>
                <p className="text-[var(--text-secondary)]">10th Grade</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}
