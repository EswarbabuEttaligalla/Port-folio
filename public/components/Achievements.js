function Achievements() {
  try {
    const achievements = [
      {
        title: 'Web Development Hackathon',
        description: 'Built and deployed a complete web application within 24 hours during Web Development Hackathon',
        icon: 'code',
        category: 'Hackathon',
        highlight: '24 Hours'
      },
      {
        title: 'JEE Advanced Achievement',
        description: 'Secured All India Rank 29,000 in JEE Advanced (General Category)',
        icon: 'trophy',
        category: 'Academic',
        highlight: 'AIR 29,000'
      }
    ];

    return (
      <section id="achievements" className="section-padding bg-white dark:bg-slate-900" data-name="achievements" data-file="components/Achievements.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Achievements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-lg text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
              Recognition and accomplishments that showcase my dedication and skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
                  achievement.category === 'Hackathon' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg shadow-purple-500/25' 
                    : 'bg-gradient-to-r from-yellow-500 to-orange-600 shadow-lg shadow-yellow-500/25'
                }`}>
                  <div className={`icon-${achievement.icon} text-3xl text-white`}></div>
                </div>
                
                <div className="mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    achievement.category === 'Hackathon'
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {achievement.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{achievement.title}</h3>
                
                <div className={`text-3xl font-bold mb-4 ${
                  achievement.category === 'Hackathon' ? 'text-purple-600' : 'text-yellow-600'
                }`}>
                  {achievement.highlight}
                </div>
                
                <p className="text-[var(--text-secondary)] leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">2+</div>
                <div className="text-[var(--text-secondary)]">Hackathons</div>
              </div>
              <div className="w-px h-12 bg-[var(--border-color)]"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">99%</div>
                <div className="text-[var(--text-secondary)]">10th Grade</div>
              </div>
              <div className="w-px h-12 bg-[var(--border-color)]"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">95%</div>
                <div className="text-[var(--text-secondary)]">12th Grade</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Achievements component error:', error);
    return null;
  }
}
