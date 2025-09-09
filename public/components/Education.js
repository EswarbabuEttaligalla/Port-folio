function Education() {
  try {
    const educationData = [
      {
        institution: 'Indian Institute of Information Technology, Sri City',
        degree: 'B.Tech in Computer Science and Engineering',
        period: '2023 – 2027 (Expected)',
        description: 'Currently pursuing undergraduate degree with focus on software engineering, algorithms, and system design.',
        icon: 'graduation-cap',
        status: 'current'
      },
      {
        institution: 'Narayana Junior College, Tirupati, AP',
        degree: '12th Grade (PCM)',
        period: '2021 – 2023',
        description: 'Completed intermediate education with 95% marks in Physics, Chemistry, and Mathematics.',
        icon: 'book-open',
        status: 'completed'
      },
      {
        institution: 'Sri Chaitanya School, Tirupati, AP',
        degree: '10th Grade',
        period: '2021',
        description: 'Completed secondary education with excellent 99% marks, laying strong foundation for higher studies.',
        icon: 'award',
        status: 'completed'
      }
    ];

    return (
      <section id="education" className="section-padding bg-gray-50 dark:bg-slate-800" data-name="education" data-file="components/Education.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-lg text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
              My educational journey and academic achievements
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
            
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                    edu.status === 'current' 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-green-500 to-teal-600 shadow-lg shadow-green-500/25'
                  }`}>
                    <div className={`icon-${edu.icon} text-2xl text-white`}></div>
                  </div>
                  
                  <div className="flex-1 card p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{edu.institution}</h3>
                        <h4 className="text-lg font-semibold text-[var(--primary-color)] mb-2">{edu.degree}</h4>
                        <p className="text-[var(--text-secondary)] font-medium">{edu.period}</p>
                      </div>
                      {edu.status === 'current' && (
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Education component error:', error);
    return null;
  }
}
