function Projects() {
  try {
    const [expandedProject, setExpandedProject] = React.useState(null);
    
    const projects = [
      {
        id: 'relab',
        title: 'RELABTeams – Collaborative Jobs & Projects Platform',
        timeline: 'Jan 2025 – Present',
        description: 'Full-stack platform using Node.js, Express, and MongoDB enabling seamless job applications and project collaboration.',
        details: [
          'Implemented end-to-end job workflow with statuses (Pending, On Hold, Hired, Rejected), improving recruiter efficiency by 40%',
          'Built real-time notification system and dashboards with resume storage, duplicate prevention, and bulk broadcasting for 200+ student users',
          'Enhanced user experience with dynamic EJS views, toast alerts, and metrics tracking'
        ],
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'JavaScript'],
        icon: 'users'
      },
      {
        id: 'invoice',
        title: 'Invoice Chatbot',
        timeline: 'Jan 2025 – Feb 2025',
        description: 'AI-powered chatbot to extract, analyze, and answer invoice-related queries using Python and OpenAI API.',
        details: [
          'Applied NLP techniques to parse structured financial data, automating invoice checks and reducing manual workload by 70%',
          'Integrated a conversational interface for interactive queries, improving accuracy and usability',
          'Created intelligent query processing for vendor, amount, and due date extraction'
        ],
        technologies: ['Python', 'NLP', 'OpenAI API', 'Data Processing'],
        icon: 'bot'
      }
    ];

    return (
      <section id="projects" className="section-padding bg-white dark:bg-slate-900" data-name="projects" data-file="components/Projects.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-lg text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="card p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <div className={`icon-${project.icon} text-2xl text-white`}></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
                      <p className="text-[var(--text-secondary)] font-medium">{project.timeline}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-[var(--primary-color)] hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    <div className={`text-lg transition-transform duration-300 ${expandedProject === project.id ? 'rotate-180' : ''} icon-chevron-down`}></div>
                  </button>
                </div>

                <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {expandedProject === project.id && (
                  <div className="border-t border-[var(--border-color)] pt-6 animate-in slide-in-from-top-2 duration-300">
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Key Features & Achievements:</h4>
                    <ul className="space-y-3">
                      {project.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="icon-check text-sm text-green-600 dark:text-green-400"></div>
                          </div>
                          <span className="text-[var(--text-secondary)] leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}
