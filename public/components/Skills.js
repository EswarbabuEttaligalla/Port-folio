function Skills() {
  try {
    const skillCategories = [
      {
        title: 'Programming Languages',
        icon: 'code',
        skills: ['C', 'C++', 'Java', 'Python', 'SQL']
      },
      {
        title: 'Web Development',
        icon: 'globe',
        skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js']
      },
      {
        title: 'Databases',
        icon: 'database',
        skills: ['MySQL', 'MongoDB']
      },
      {
        title: 'Tools & Technologies',
        icon: 'settings',
        skills: ['Git', 'GitHub', 'VS Code', 'Agile']
      },
      {
        title: 'Cloud & Concepts',
        icon: 'cloud',
        skills: ['AWS (Basics)', 'Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks']
      },
      {
        title: 'Languages',
        icon: 'message-circle',
        skills: ['English', 'Telugu', 'Hindi']
      }
    ];

    return (
      <section id="skills" className="section-padding bg-gray-50 dark:bg-slate-800" data-name="skills" data-file="components/Skills.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-lg text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
              Here are the technologies and skills I've been working with recently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <div className={`icon-${category.icon} text-xl text-white`}></div>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Always learning and exploring new technologies to stay current with industry trends
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2 text-[var(--primary-color)]">
                <div className="icon-trending-up text-lg"></div>
                <span className="font-medium">Continuously Learning</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--primary-color)]">
                <div className="icon-lightbulb text-lg"></div>
                <span className="font-medium">Problem Solving</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--primary-color)]">
                <div className="icon-rocket text-lg"></div>
                <span className="font-medium">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}
