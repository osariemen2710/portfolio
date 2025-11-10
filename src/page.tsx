import { useState, type JSX } from "react";

// It's good practice to define types in a separate file or at the top of the file if it's a small component.
type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
  image?: string; // image is optional
  tags?: string[]; // tags is optional
};

const projects: Project[] = [
  {
    id: 1,
    title: "Prestige Health (Main)",
    description: "Healthcare platform with patient/provider experiences.",
    url: "https://prestigehealth.app",
    image: "https://prestigehealth.app/Group.png",
    tags: ["React", "JavaScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Prestige Health — Provider",
    description: "Provider portal for clinicians and staff.",
    url: "https://provider.prestigehealth.app/",
    image: "https://provider.prestigehealth.app/Group.png",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    title: "Prestige Health — Admin",
    description: "Admin dashboard for managing the healthcare product.",
    url: "https://admin.prestigehealth.app/",
    image: "https://admin.prestigehealth.app/Group.png",
    tags: ["React", "JavaScript", "Dashboard"],
  },
  {
    id: 4,
    title: "Space Tourism (Demo)",
    description: "A Beautiful responsive multi-page UI demo (Vercel).",
    url: "https://space-tourism-alpha-mocha.vercel.app/",
    image: "https://space-tourism-alpha-mocha.vercel.app/logo.svg",
    tags: ["React", "CSS", "Responsive"],
  },
  {
    id: 5,
    title: "Mineral (Portfolio Demo)",
    description: "A minimal portfolio / landing demo.",
    url: "https://mineral-chi.vercel.app/",
    image: "https://mineral-chi.vercel.app/favicon.png",
    tags: ["React", "Tailwind", "TypeScript"],
  },
  {
    id: 6,
    title: "Stingy Discussion — Todo (Featured)",
    description: "A focused Todo app built with Next.js and TypeScript. Click to open the live demo and explore the implementation details.",
    url: "https://stingy-discussion.pipeops.app/",
    image: "https://stingy-discussion.pipeops.app/favicon.png",
    tags: ["Next.js", "TypeScript", "Todo"],
  },
];

export default function Portfolio(): JSX.Element {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  // Contact form state
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [loadingContact, setLoadingContact] = useState(false);
  const [contactSuccess, setContactSuccess] = useState('');
  const [contactError, setContactError] = useState('');

  // A more robust approach for external links in the footer, as the provided ones are placeholders.
  const socialLinks = {
    GitHub: "https://github.com/Osariemen7", // Replace with actual links
    LinkedIn: "https://www.linkedin.com/in/osariemen-aibueku-11b31a265/", // Replace with actual links
    Email: "osariemen7@gmail.com", // Replace with actual links
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1223] to-[#071226] text-white antialiased relative overflow-hidden">
      {/* Background Effects */}
      {/* The SVG background image should be fine, but ensure the path is correctly escaped if this is embedded in a CSS file */}
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

  <header className="relative max-w-7xl mx-auto px-6 py-8 flex items-center justify-between backdrop-blur-sm bg-white/3/10 rounded-2xl mt-6 border border-white/6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400">
            Aibueku Osariemen
          </h1>
          <p className="text-slate-300 mt-1 font-medium">
            Frontend Engineer — HTML • CSS • JavaScript • TypeScript • React • Tailwind
          </p>
        </div>
        <nav className="hidden md:flex space-x-8">
          {["Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-white transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </header>

      <main className="relative max-w-7xl mx-auto px-6">
        {/* Hero Section */}
  <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-semibold text-blue-300 border border-blue-500/30">
                ✨ Available for new projects
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Building{' '}
                <span className="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  polished
                </span>
                {' '}interfaces that scale
              </h2>

              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                I'm a frontend engineer focused on fast, accessible, and delightful user experiences.
                Specializing in React, TypeScript, and modern CSS frameworks.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-slate-600 rounded-xl text-slate-300 hover:text-white hover:border-slate-400 font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              {[
                { name: "React", level: "95%" },
                { name: "TypeScript", level: "90%" },
                { name: "Tailwind", level: "88%" }
              ].map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-slate-600 flex items-center justify-center mb-2">
                    <span className="text-sm font-bold text-blue-300">{skill.level}</span>
                  </div>
                  <span className="text-xs text-slate-400">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center text-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center p-8 space-y-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div className="text-sm uppercase tracking-wider font-semibold opacity-90">Frontend Engineer</div>
                  <div className="font-bold text-2xl">Aibueku Osariemen</div>
                  <div className="text-sm opacity-80 leading-relaxed">Building the future of web interfaces</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-15 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section id="featured" className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-6">Featured Project</h3>
            <div className="group relative bg-gradient-to-r from-[#071226] to-[#0b1223] border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <a href="https://stingy-discussion.pipeops.app/" target="_blank" rel="noreferrer" className="block md:flex items-center">
                <div className="md:w-1/3 w-full h-48 md:h-auto bg-[linear-gradient(45deg,#06b6d4,#7c3aed)] flex items-center justify-center">
                  <img src={projects.find(p => p.id === 6)?.image || ''} alt="Stingy Discussion logo" className="h-20 w-auto object-contain" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
                </div>
                <div className="p-6 md:w-2/3">
                  <h4 className="text-2xl font-bold mb-2">Stingy Discussion — Todo</h4>
                  <p className="text-slate-300 mb-4">A polished Todo app built with Next.js + TypeScript. Clean architecture, fast UX, and focused feature set. Live demo linked.</p>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-sm border border-white/8">Next.js</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-sm border border-white/8">TypeScript</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-sm border border-white/8">Todo</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Selected Work</h3>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A curated collection of projects showcasing modern web development practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative bg-gradient-to-br from-white/5 via-white/2 to-white/2 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 shadow-lg"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Ensure accessibility for links, especially if the whole card is clickable */}
                <a href={project.url} target="_blank" rel="noreferrer" className="block">
                  <div className="h-48 w-full bg-gradient-to-b from-white/2 to-transparent flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r from-white-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    {project.image ? (
                      // Add alt text for accessibility if image is present
                      <img
                        src={project.image}
                        alt={`${project.title} thumbnail`}
                        className="h-20 w-20 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-slate-500 text-2xl">🚀</div>
                    )}
                  </div>

                    <div className="p-6">
                    <h4 className="font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/40">
                      <span className="text-sm font-medium text-purple-300 group-hover:text-purple-200 transition-colors duration-300 flex items-center">
                        Open Site
                        <span className={`ml-2 transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1' : ''}`}>↗</span>
                      </span>
                      <span className="text-xs text-slate-500">Live Demo</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-4xl font-bold mb-6">About Me</h3>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  I build frontend applications using modern toolchains and care deeply about
                  performance, accessibility, and developer experience. My approach combines
                  technical excellence with creative problem-solving.
                </p>
                <p>
                  With expertise in React, TypeScript, and modern CSS frameworks, I create
                  interfaces that not only look great but perform exceptionally across all devices.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-semibold mb-6 text-purple-300">Core Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "HTML & Semantic Markup",
                  "Responsive CSS & Tailwind",
                  "JavaScript & TypeScript",
                  "React, Hooks, Context",
                  "Vite & Dev Tooling",
                  "Testing (Jest / RTL)",
                  "Performance Optimization",
                  "Accessibility (WCAG)"
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-xl text-slate-400">Available for freelance projects and full-time opportunities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-4">Get In Touch</h4>
                <p className="text-slate-300 mb-6">
                  Always excited to discuss new projects and opportunities.
                  Let's build something amazing together.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    {/* Consider using an icon library for better visuals here */}
                    <span className="text-blue-300">📧</span>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    {/* Replace with your actual email */}
                    <p className="text-slate-400">osariemen7@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-300">📍</span>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-slate-400">Edo, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 space-y-6">
              {/* Added htmlFor to labels for accessibility */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  value={contact.name}
                  onChange={(e) => setContact((s) => ({ ...s, name: e.target.value }))}
                  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-1 focus:ring-cyan-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact((s) => ({ ...s, email: e.target.value }))}
                  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-1 focus:ring-cyan-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={contact.message}
                  onChange={(e) => setContact((s) => ({ ...s, message: e.target.value }))}
                  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-1 focus:ring-cyan-500 transition-colors duration-300"
                  rows={4}
                  placeholder="Tell me about your project..."
                />
              </div>

              {contactError && (
                <p className="text-xs text-red-400">{contactError}</p>
              )}
              {contactSuccess && (
                <p className="text-xs text-green-400">{contactSuccess}</p>
              )}

              <button
                type="button"
                onClick={async () => {
                  // simple validation
                  setContactError('');
                  setContactSuccess('');
                  if (!contact.name.trim()) return setContactError('Please enter your name');
                  if (!contact.email.trim()) return setContactError('Please enter your email');
                  // basic email regex
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!emailRegex.test(contact.email)) return setContactError('Please enter a valid email');
                  if (!contact.message.trim() || contact.message.trim().length < 10) return setContactError('Message must be at least 10 characters');

                  setLoadingContact(true);
                  try {
                    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
                    if (endpoint) {
                      const res = await fetch(endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: contact.name, email: contact.email, message: contact.message }),
                      });
                      if (res.ok) {
                        setContactSuccess('Message sent — I will get back to you soon.');
                        setContact({ name: '', email: '', message: '' });
                      } else {
                        const text = await res.text();
                        // fallback to mailto if server rejects
                        console.warn('Contact endpoint error:', text);
                        const mailto = `mailto:osariemen7@gmail.com?subject=${encodeURIComponent('Portfolio contact from ' + contact.name)}&body=${encodeURIComponent(contact.message + '\n\nFrom: ' + contact.email)}`;
                        window.location.href = mailto;
                        setContactSuccess('Opened your mail client as a fallback.');
                      }
                    } else {
                      // fallback: open mail client with prefilled content
                      const mailto = `mailto:osariemen7@gmail.com?subject=${encodeURIComponent('Portfolio contact from ' + contact.name)}&body=${encodeURIComponent(contact.message + '\n\nFrom: ' + contact.email)}`;
                      window.location.href = mailto;
                      setContactSuccess('Opened your mail client as a fallback.');
                      setContact({ name: '', email: '', message: '' });
                    }
                  } catch (err) {
                    console.error(err);
                    setContactError('An error occurred while sending — please try again or email osariemen7@gmail.com');
                  } finally {
                    setLoadingContact(false);
                  }
                }}
                disabled={loadingContact}
                className={`w-full py-4 rounded-lg text-white font-semibold transition-all duration-300 transform ${loadingContact ? 'opacity-60 cursor-not-allowed bg-slate-600' : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105'}`}
              >
                {loadingContact ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-slate-800 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Aibueku Osariemen. Crafted with React + TypeScript + Tailwind.
          </p>
          <div className="flex items-center space-x-6">
            {Object.entries(socialLinks).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-purple-300 transition-colors duration-300 relative group"
              >
                {name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
    
  );
}