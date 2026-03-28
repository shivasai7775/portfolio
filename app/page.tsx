import Link from "next/link";
import Image from "next/image";
import ContactForm from "./components/ContactForm";

// Project data
const projects = [
  {
    id: "quantum-threat-intelligence",
    title: "Quantum-Enhanced Threat Intelligence",
    desc: "A cutting-edge cybersecurity platform leveraging quantum computing algorithms for advanced threat detection and real-time intelligence analysis.",
    image: "🛡️",
    tech: ["Python", "Quantum ML", "FastAPI", "React"],
    category: "AI / Cybersecurity",
    year: "2026",
  },
  {
    id: "ai-maid-booking-platform",
    title: "AI-Powered Maid Booking Platform",
    desc: "Full-stack booking system with AI-driven automatic assignment, real-time tracking, QR verification, and comprehensive admin dashboard.",
    image: "🏠",
    tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "AI"],
    category: "Full Stack / AI",
    year: "2026",
  },
  {
    id: "smart-document-ai",
    title: "Smart Document AI Processor",
    desc: "Intelligent document processing system that uses AI to extract, classify, and analyze content from PDFs, images, and various file formats.",
    image: "📄",
    tech: ["Python", "TensorFlow", "FastAPI", "AWS S3"],
    category: "AI / ML",
    year: "2025",
  },
  {
    id: "real-time-chat-application",
    title: "Real-Time Chat Application",
    desc: "Scalable real-time messaging platform with group chats, file sharing, end-to-end encryption, and AI-powered smart replies.",
    image: "💬",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "Full Stack",
    year: "2025",
  },
  {
    id: "ecommerce-ai-recommendation",
    title: "E-Commerce AI Recommendation Engine",
    desc: "ML-powered recommendation system for e-commerce that personalizes product suggestions based on user behavior and purchase patterns.",
    image: "🛒",
    tech: ["Python", "PyTorch", "Django", "Redis"],
    category: "AI / E-Commerce",
    year: "2025",
  },
  {
    id: "portfolio-website-builder",
    title: "AI Portfolio Website Builder",
    desc: "Dynamic portfolio generator that uses AI to create stunning personal websites with customizable themes and automatic content optimization.",
    image: "🌐",
    tech: ["Next.js", "TypeScript", "OpenAI", "Vercel"],
    category: "Web Dev / AI",
    year: "2025",
  },
];

const certificates = [
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2025",
    icon: "🧠",
  },
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    icon: "☁️",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Meta (Coursera)",
    date: "2024",
    icon: "💻",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford (Coursera)",
    date: "2024",
    icon: "📊",
  },
  {
    title: "React Advanced Patterns",
    issuer: "Udemy",
    date: "2024",
    icon: "⚛️",
  },
  {
    title: "Python for AI & Data Science",
    issuer: "IBM (Coursera)",
    date: "2023",
    icon: "🐍",
  },
];

const freelanceProjects = [
  {
    title: "Restaurant Management System",
    client: "FoodChain Inc.",
    desc: "Built a comprehensive restaurant management platform with online ordering, table reservations, kitchen display system, and analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    status: "completed",
  },
  {
    title: "Healthcare Appointment Portal",
    client: "MedCare Solutions",
    desc: "HIPAA-compliant appointment scheduling system with telemedicine integration, patient portal, and automated reminders.",
    tech: ["Next.js", "Express", "PostgreSQL", "Twilio"],
    status: "completed",
  },
  {
    title: "Inventory Analytics Dashboard",
    client: "RetailPro Corp.",
    desc: "Real-time inventory tracking dashboard with AI-powered demand forecasting, automated reorder suggestions, and supply chain visualization.",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    status: "completed",
  },
  {
    title: "AI Content Generation Platform",
    client: "ContentForge Media",
    desc: "AI-powered content creation suite for social media management with auto-scheduling, SEO optimization, and performance analytics.",
    tech: ["Next.js", "OpenAI API", "Node.js", "Redis"],
    status: "in-progress",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="hero">
        <div className="spider-web-corner top-right" />
        <div className="hero-container">
          <div className="hero-text">
            <p className="hero-greeting">⚡ Hello, I&apos;m</p>
            <h1 className="hero-name">
              PONDURTHI
              <span className="last-name">SHIVASAI KUMAR</span>
            </h1>
            <p className="hero-title">
              <span className="highlight">AI Full Stack Developer</span> &amp;{" "}
              <span className="highlight">Web Developer</span>
            </p>
            <p className="hero-desc">
              Weaving powerful digital experiences with the precision of a spider&apos;s web.
              Crafting intelligent, scalable applications that push the boundaries of
              AI and modern web development.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-spidey btn-primary">
                🕷️ View Projects
              </a>
              <a href="#contact" className="btn-spidey btn-outline">
                📬 Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              {/* Paint splash effects */}
              <div className="paint-splash paint-splash-1" />
              <div className="paint-splash paint-splash-2" />
              <div className="paint-splash paint-splash-3" />

              {/* Decorative circles */}
              <div className="hero-circle hero-circle-1" />
              <div className="hero-circle hero-circle-2" />
              <div className="hero-circle hero-circle-3" />

              {/* Profile image */}
              <Image
                src="/Images/shiva_photo.jpg"
                alt="Pondurthi Shivasai Kumar"
                width={380}
                height={380}
                className="hero-profile-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="section-divider" />

      {/* ABOUT SECTION */}
      <section className="section" id="about">
        <div className="section-container">
          <div className="section-header reveal">
            <p className="section-subtitle">🕷️ Who Am I</p>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                I&apos;m <strong style={{ color: "#E23636" }}>Pondurthi Shivasai Kumar</strong>,
                a passionate AI Full Stack Developer and Web Developer from India.
                I specialize in building intelligent, high-performance web applications
                that blend cutting-edge AI with modern design to deliver exceptional digital experiences.
              </p>
              <p>
                With expertise spanning from neural networks and machine learning to
                responsive front-end design and scalable backend architecture, I bridge the
                gap between artificial intelligence and practical web solutions.
                Every project I build is crafted with the same meticulous attention to detail
                as a spider weaving its web.
              </p>

              <div className="about-info-grid">
                <div className="about-info-item">
                  <div className="label">Name</div>
                  <div className="value">Shivasai Kumar P.</div>
                </div>
                <div className="about-info-item">
                  <div className="label">Location</div>
                  <div className="value">India</div>
                </div>
                <div className="about-info-item">
                  <div className="label">Specialization</div>
                  <div className="value">AI + Full Stack</div>
                </div>
                <div className="about-info-item">
                  <div className="label">Available For</div>
                  <div className="value">Freelance & Full-time</div>
                </div>
              </div>
            </div>

            <div className="skills-container reveal">
              <div className="skill-category">
                <h3>🤖 AI & Machine Learning</h3>
                <div className="skill-tags">
                  <span className="skill-tag">TensorFlow</span>
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">OpenAI API</span>
                  <span className="skill-tag">LangChain</span>
                  <span className="skill-tag">Computer Vision</span>
                  <span className="skill-tag">NLP</span>
                  <span className="skill-tag">Scikit-learn</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>🌐 Frontend Development</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Tailwind CSS</span>
                  <span className="skill-tag">HTML5 / CSS3</span>
                  <span className="skill-tag">JavaScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>⚙️ Backend & Databases</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">Python / FastAPI</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Prisma</span>
                  <span className="skill-tag">Redis</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>🚀 DevOps & Tools</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Git / GitHub</span>
                  <span className="skill-tag">Vercel</span>
                  <span className="skill-tag">Linux</span>
                  <span className="skill-tag">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PROJECTS SECTION */}
      <section className="section" id="projects">
        <div className="section-container">
          <div className="section-header reveal">
            <p className="section-subtitle">🕸️ My Work</p>
            <h2 className="section-title">Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="project-card reveal"
              >
                <div className="project-card-image-wrapper">
                  <div
                    className="project-card-image"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "4rem",
                      background:
                        "linear-gradient(135deg, rgba(226,54,54,0.15), rgba(10,10,10,0.9))",
                    }}
                  >
                    {project.image}
                  </div>
                </div>
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.desc}</p>
                  <div className="project-card-tech">
                    {project.tech.map((t) => (
                      <span className="tech-badge" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-card-footer">
                    <span className="view-project">
                      View Details →
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "rgba(245,245,245,0.4)" }}>
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CERTIFICATES SECTION */}
      <section className="section" id="certificates">
        <div className="section-container">
          <div className="section-header reveal">
            <p className="section-subtitle">🏆 Achievements</p>
            <h2 className="section-title">Certificates</h2>
          </div>

          <div className="certificates-grid">
            {certificates.map((cert, i) => (
              <div className="cert-card reveal" key={i}>
                <div className="cert-icon">{cert.icon}</div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FREELANCING SECTION */}
      <section className="section" id="freelancing">
        <div className="section-container">
          <div className="section-header reveal">
            <p className="section-subtitle">💼 Freelance Work</p>
            <h2 className="section-title">Freelancing Projects</h2>
          </div>

          <div className="freelance-grid">
            {freelanceProjects.map((project, i) => (
              <div className="freelance-card reveal" key={i}>
                <span className={`freelance-status ${project.status}`}>
                  {project.status === "completed" ? "✅ Completed" : "🔄 In Progress"}
                </span>
                <h3 className="freelance-title">{project.title}</h3>
                <p className="freelance-client">Client: {project.client}</p>
                <p className="freelance-desc">{project.desc}</p>
                <div className="freelance-tech">
                  {project.tech.map((t) => (
                    <span className="tech-badge" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CONTACT SECTION */}
      <section className="section" id="contact">
        <div className="section-container">
          <div className="section-header reveal">
            <p className="section-subtitle">📬 Get In Touch</p>
            <h2 className="section-title">Contact Me</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info reveal">
              <h3>Let&apos;s Build Something Amazing Together</h3>
              <p>
                Whether you have a project in mind, need a freelance developer, or just
                want to chat about AI and web development — I&apos;d love to hear from you.
                Drop me a message and I&apos;ll swing by to respond!
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📧</div>
                  <div className="contact-detail-text">
                    <div className="label">Email</div>
                    <div className="value">shivasaikumar@example.com</div>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-text">
                    <div className="label">Location</div>
                    <div className="value">India</div>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">💼</div>
                  <div className="contact-detail-text">
                    <div className="label">Status</div>
                    <div className="value">Available for Freelance & Full-time</div>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
