'use client';
import { useState } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Sun,
  Moon,
  ExternalLink,
} from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  fullImage: string;
  tags: string[];
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const projects: Project[] = [
    {
      title: 'Booking Manager',
      category: 'Mobile App UI/UX',
      description:
        'A User-friendly mobile interface allowing travelers search for buses, book seats and recieve notifications about their trips.',
      image: 'FavourExpressCover.png',
      fullImage: 'FavourExpress.png',
      tags: [
        'Design Strategy',
        'Information Architecture',
        'Competitive Analysis',
      ],
    },
    {
      title: 'Lend and Borrowing App',
      category: 'UI/UX Design',
      description:
        'Seamlessly connect lenders with borrowers revolutionizing the way people access and manage financial resources',
      image: 'TrustyBehanceCover.png',
      fullImage: 'TrustyBehance.png',
      tags: ['Ideate', 'Prototyping', 'Empathy'],
    },
    {
      title: 'Payment Mobile App',
      category: 'Mobile App',
      description:
        'A secure mobile application that acts as intermidiary, holding funds until the goods and/or services are delivered',
      image: 'PayflooCover.png',
      fullImage: 'Payfloo.png',
      tags: ['Visual Design', 'User Research', 'Wireframes'],
    },
    {
      title: 'Organic Market',
      category: 'E-commerce Platform',
      description:
        'A sustainable e-commerce platform connecting local organic farmers with conscious consumers, featuring fresh produce delivery.',
      image: 'OrganicMarketCover.png',
      fullImage: 'OrganicMarket.png',
      tags: ['E-commerce Design', 'Sustainability', 'User Experience'],
    },
  ];

  const skills = [
    { name: 'User Centered Design', level: 95 },
    { name: 'Design and Creativity', level: 90 },
    { name: 'Prototyping', level: 88 },
    { name: 'Wireframing', level: 85 },
    { name: 'User Research', level: 80 },
    { name: 'Information Architecture', level: 88 },
    { name: 'Responsive Design', level: 85 },
    { name: 'Graphic Design', level: 95 },
  ];

  const lightTheme = {
    bg: 'bg-[#F5F1EA]',
    card: 'bg-white',
    text: 'text-[#433D3C]',
    textSecondary: 'text-[#6F6865]',
    border: 'border-[#E2DCD3]',
    accent: 'bg-[#C2A68C]',
    accentText: 'text-[#C2A68C]',
  };

  const darkTheme = {
    bg: 'bg-[#1D1C19]',
    card: 'bg-[#2A2825]',
    text: 'text-[#E8E3DB]',
    textSecondary: 'text-[#B8B2A7]',
    border: 'border-[#3A3733]',
    accent: 'bg-[#C2A68C]',
    accentText: 'text-[#C2A68C]',
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <main>
      <div
        className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300 font-sans`}
      >
        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 ${theme.card} border-b ${theme.border} backdrop-blur-lg bg-opacity-80`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-[#C2A68C]">
                Hadjeu Nadine
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`p-2 rounded-full ${theme.border} border`}
                >
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="md:hidden py-4 space-y-3">
                {['Home', 'Work', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 ${theme.textSecondary} hover:text-[#C2A68C]`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex items-center justify-center px-6 lg:px-12 pt-50 pb-10  ">
          <div className="max-w-4xl text-center">
            <div
              className={`text-sm font-semibold ${theme.textSecondary} mb-4 uppercase tracking-wider`}
            >
              Designer & Problem Solver
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Designing Products
              <span className="block text-[#C2A68C]">
                That Feel Good to Use
              </span>
            </h1>

            <p
              className={`text-xl ${theme.textSecondary} mb-8 max-w-2xl mx-auto`}
            >
              I’m a product designer focused on clarity, simplicity, and
              designing for real people. Clean visuals, soft tones, and
              interfaces that feel comfortable.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full font-semibold bg-[#C2A68C] text-white hover:opacity-90 transition-all"
              >
                See My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setShowContactForm(true);
                }}
                className={`px-8 py-3 rounded-full font-semibold border ${theme.border} hover:border-[#C2A68C] transition-all`}
              >
                Let’s Talk
              </a>
            </div>
          </div>
        </section>
        {/* Design Process Section */}

        {/* Projects Section */}
        <section className="py-20 px-6 lg:px-8" id="projects">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-3">Featured Projects</h2>
            <p className={`${theme.textSecondary} mb-12`}>
              A few projects that reflect how I think and design.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`${theme.card} border ${theme.border} rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/3] overflow-hidden ">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-semibold text-[#C2A68C] mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className={`${theme.textSecondary} text-sm mb-4`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1 rounded-full bg-[#F0EAE2] text-[#6F6865]`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center text-[#C2A68C] text-sm font-semibold">
                      View Project <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`${theme.card} py-20 px-6 lg:px-8`}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
              <div className="space-y-6">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className={theme.textSecondary}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-2 bg-[#E8E1D9] rounded-full overflow-hidden`}
                    >
                      <div
                        className={`h-full ${theme.accent} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <p className={theme.textSecondary}>
                Creative and user-focused UX/UI & Product Designer with 4+ years
                of experience designing impactful digital products across web
                and mobile platforms. Skilled in user research, wireframing,
                prototyping, usability testing, and creating design systems that
                improve product efficiency and satisfaction.
              </p>
              <p className={`${theme.textSecondary} mt-4`}>
                Experienced in leading design teams, mentoring young designers,
                and aligning design strategy with business goals. Passionate
                about using design to solve real problems, empower communities,
                and make technology more human.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <Mail className="w-5 h-5 text-[#C2A68C]" />
                <span className={theme.textSecondary}>
                  hadjeunadine@gmail.com
                </span>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.behance.net/nadinehadjeu"
                  className={`p-3 rounded-full ${theme.card} hover:bg-[#C2A68C] hover:text-white transition-colors`}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/hadjeunadine05"
                  className={`p-3 rounded-full ${theme.card} hover:bg-[#C2A68C] hover:text-white transition-colors`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className={`p-3 rounded-full ${theme.card} hover:bg-[#C2A68C] hover:text-white transition-colors`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}

        {/* CTA Section */}
        <section className={`py-20 px-6 lg:px-8 text-center `}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something Great Together
          </h2>
          <p className={`${theme.textSecondary} mb-8`}>
            If you’re working on a new idea or want to refresh an existing
            product, I’d love to hear about it.
          </p>
          <a
            href="/NadineHadjeuUX_UICV.pdf"
            download
            className={`px-8 py-4 rounded-full font-semibold ${theme.accent} text-white inline-flex items-center gap-2 hover:opacity-90 transition-all`}
          >
            Download CV <ChevronRight className="w-5 h-5" />
          </a>
        </section>

        {/* Footer */}
        <footer
          className={`border-t ${theme.border} py-12 px-6 lg:px-8 text-center`}
        >
          <p className={theme.textSecondary}>
            © 2025 Nadine — Designed and built with Love.
          </p>
        </footer>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed overflow-auto py-10 inset-0 z-50 flex items-center justify-center p-4 bg-black/10 bg-opacity-90"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-white hover:bg-opacity-30 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={selectedProject.fullImage}
                  alt={selectedProject.title}
                  className="max-w-full max-h-full object-contain rounded- "
                />
              </div>
            </div>
          </div>
        )}

        {/* Contact Form Modal */}
        {showContactForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 bg-opacity-75"
            onClick={() => setShowContactForm(false)}
          >
            <div
              className={`${theme.card} rounded-2xl max-w-md w-full`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Get In Touch</h3>
                  <button
                    onClick={() => setShowContactForm(false)}
                    className={`p-2 rounded-full ${theme.border} border hover:bg-[#C2A68C] hover:text-white transition-colors`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const message = `Hello! My name is ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
                    const whatsappUrl = `https://wa.me/237563482997?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                    setFormData({ name: '', email: '', message: '' });
                    setShowContactForm(false);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${theme.text}`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-lg border ${theme.border} ${theme.bg} ${theme.text} focus:outline-none focus:border-[#C2A68C]`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${theme.text}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-lg border ${theme.border} ${theme.bg} ${theme.text} focus:outline-none focus:border-[#C2A68C]`}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${theme.text}`}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-lg border ${theme.border} ${theme.bg} ${theme.text} focus:outline-none focus:border-[#C2A68C] resize-none`}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-full font-semibold bg-green-600 text-white hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    Send via WhatsApp
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <p className={`${theme.textSecondary} text-sm`}>
                    This will open WhatsApp with your message pre-filled
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
