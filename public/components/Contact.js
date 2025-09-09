function Contact({ showToast }) {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) {
        showToast('Please fill in all fields', 'error');
        return;
      }

      setIsSubmitting(true);
      try {
        const success = await sendEmail(formData);
        if (success) {
          showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          showToast('Failed to send message. Please try again.', 'error');
        }
      } catch (error) {
        showToast('An error occurred. Please try again later.', 'error');
      }
      setIsSubmitting(false);
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-lg text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Let's Connect</h3>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
                </p>
              </div>

              <div className="space-y-6">
                <a href="mailto:eswarbabuettaligalla@gmail.com" className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <div className="icon-mail text-xl text-blue-600 dark:text-blue-400"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Email</h4>
                    <p className="text-[var(--text-secondary)]">eswarbabuettaligalla@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919063980608" className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <div className="icon-phone text-xl text-green-600 dark:text-green-400"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Phone</h4>
                    <p className="text-[var(--text-secondary)]">+91 9063980608</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-slate-800 shadow-md">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <div className="icon-map-pin text-xl text-purple-600 dark:text-purple-400"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Location</h4>
                    <p className="text-[var(--text-secondary)]">Tirupati, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="card p-8">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Send Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-[var(--text-primary)] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-[var(--text-primary)] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-[var(--text-primary)] transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <div className="icon-send text-lg"></div>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
