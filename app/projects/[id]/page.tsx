import Link from "next/link";

// Full project data with details
const projectData: Record<string, {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  tech: string[];
  challenges: string[];
  github?: string;
  live?: string;
}> = {
  "quantum-threat-intelligence": {
    title: "Quantum-Enhanced Threat Intelligence",
    category: "AI / Cybersecurity",
    year: "2026",
    image: "🛡️",
    description: "A cutting-edge cybersecurity platform leveraging quantum computing algorithms for advanced threat detection and real-time intelligence analysis.",
    longDescription: "This revolutionary cybersecurity platform combines the power of quantum computing with traditional machine learning to create an unprecedented threat detection system. The platform analyzes network traffic patterns, identifies zero-day vulnerabilities, and provides real-time threat intelligence to security teams. By utilizing quantum-enhanced feature extraction and classification algorithms, it achieves detection rates significantly higher than classical approaches alone.",
    features: [
      "Quantum-enhanced anomaly detection with 98% accuracy",
      "Real-time network traffic analysis and threat scoring",
      "Zero-day vulnerability prediction using quantum ML models",
      "Interactive threat visualization dashboard",
      "Automated incident response workflow engine",
      "Multi-tenant architecture for enterprise deployment",
      "Integration with SIEM platforms (Splunk, ELK)",
      "Comprehensive reporting and compliance tools",
    ],
    tech: ["Python", "Qiskit", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
    challenges: [
      "Bridging quantum computing concepts with practical ML applications",
      "Optimizing quantum circuit simulations for real-time processing",
      "Building a scalable pipeline for high-throughput network data",
      "Ensuring accuracy balance between quantum and classical models",
    ],
    github: "https://github.com/",
  },
  "ai-maid-booking-platform": {
    title: "AI-Powered Maid Booking Platform",
    category: "Full Stack / AI",
    year: "2026",
    image: "🏠",
    description: "Full-stack booking system with AI-driven automatic assignment, real-time tracking, QR verification, and comprehensive admin dashboard.",
    longDescription: "A complete SaaS platform for managing home cleaning services. This system handles the entire lifecycle from customer booking to service completion. The AI engine automatically assigns maids based on proximity, ratings, availability, and skill matching. Features include secure QR code verification, real-time GPS tracking, automated payment processing, and an advanced admin dashboard with analytics.",
    features: [
      "AI-powered automatic maid assignment algorithm",
      "QR code verification for service authentication",
      "Real-time GPS tracking of service professionals",
      "Comprehensive admin dashboard with analytics",
      "Automated booking notifications via SMS and email",
      "Rating and review system with sentiment analysis",
      "Payment gateway integration (Stripe & Razorpay)",
      "Multi-language support for diverse user base",
    ],
    tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "AI/ML", "Twilio", "Stripe", "AWS"],
    challenges: [
      "Designing an efficient assignment algorithm that balances multiple constraints",
      "Implementing secure, tamper-proof QR verification system",
      "Building real-time tracking with minimal battery impact",
      "Scaling the platform to handle concurrent booking requests",
    ],
    github: "https://github.com/",
    live: "https://example.com/",
  },
  "smart-document-ai": {
    title: "Smart Document AI Processor",
    category: "AI / ML",
    year: "2025",
    image: "📄",
    description: "Intelligent document processing system that uses AI to extract, classify, and analyze content from PDFs, images, and various file formats.",
    longDescription: "An enterprise-grade intelligent document processing system designed to automate the extraction, classification, and analysis of information from various document formats. The platform uses a combination of OCR, NLP, and custom-trained ML models to understand document structure, extract key entities, and route documents through automated workflows.",
    features: [
      "Multi-format support: PDF, DOCX, images, scanned documents",
      "Advanced OCR with 99%+ accuracy on printed text",
      "Named entity recognition for key data extraction",
      "Document classification into 50+ categories",
      "Automated workflow routing and approval chains",
      "Audit trail and compliance logging",
      "RESTful API for third-party integrations",
      "Batch processing of thousands of documents per hour",
    ],
    tech: ["Python", "TensorFlow", "Tesseract OCR", "FastAPI", "React", "AWS S3", "Elasticsearch", "Docker"],
    challenges: [
      "Handling diverse document layouts and quality levels",
      "Training models on limited labeled data using transfer learning",
      "Optimizing processing speed for production workloads",
      "Maintaining accuracy across multiple languages and scripts",
    ],
    github: "https://github.com/",
  },
  "real-time-chat-application": {
    title: "Real-Time Chat Application",
    category: "Full Stack",
    year: "2025",
    image: "💬",
    description: "Scalable real-time messaging platform with group chats, file sharing, end-to-end encryption, and AI-powered smart replies.",
    longDescription: "A full-featured real-time messaging platform built for both personal and team communication. The application supports one-on-one messages, group chats with up to 500 members, file and media sharing, and voice messages. AI-powered smart replies suggest context-aware responses to speed up conversations. End-to-end encryption ensures all messages remain private and secure.",
    features: [
      "Real-time messaging with sub-100ms latency",
      "Group chats with roles and permissions",
      "File & media sharing with preview and compression",
      "AI-powered smart reply suggestions",
      "End-to-end encryption for all messages",
      "Read receipts and typing indicators",
      "Message search and pinning functionality",
      "Push notifications across web and mobile",
    ],
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "Redis", "OpenAI API", "WebRTC", "Firebase"],
    challenges: [
      "Achieving sub-100ms message delivery at scale",
      "Implementing E2E encryption without compromising performance",
      "Building an efficient message search across millions of records",
      "Managing WebSocket connections across distributed servers",
    ],
    github: "https://github.com/",
    live: "https://example.com/",
  },
  "ecommerce-ai-recommendation": {
    title: "E-Commerce AI Recommendation Engine",
    category: "AI / E-Commerce",
    year: "2025",
    image: "🛒",
    description: "ML-powered recommendation system for e-commerce that personalizes product suggestions based on user behavior and purchase patterns.",
    longDescription: "A sophisticated recommendation engine designed for e-commerce platforms that uses collaborative filtering, content-based filtering, and deep learning to deliver highly personalized product suggestions. The system processes user behavior data in real-time, builds dynamic user profiles, and generates recommendations that significantly improve conversion rates and customer engagement.",
    features: [
      "Hybrid recommendation model (collaborative + content-based)",
      "Real-time user behavior tracking and profiling",
      "A/B testing framework for recommendation strategies",
      "Cold-start handling for new users and products",
      "Contextual recommendations based on time and trends",
      "Performance dashboard with conversion tracking",
      "REST API with sub-50ms response time",
      "Scalable to millions of products and users",
    ],
    tech: ["Python", "PyTorch", "Django", "Redis", "Kafka", "PostgreSQL", "Celery", "Docker"],
    challenges: [
      "Solving the cold-start problem for new users effectively",
      "Balancing recommendation diversity with relevance",
      "Processing real-time user events at scale using streaming",
      "Preventing recommendation bubbles and ensuring discovery",
    ],
    github: "https://github.com/",
  },
  "portfolio-website-builder": {
    title: "AI Portfolio Website Builder",
    category: "Web Dev / AI",
    year: "2025",
    image: "🌐",
    description: "Dynamic portfolio generator that uses AI to create stunning personal websites with customizable themes and automatic content optimization.",
    longDescription: "An AI-powered platform that enables developers, designers, and creatives to generate beautiful portfolio websites in minutes. Users provide their information and preferences, and the AI generates optimized content, selects appropriate layouts, and creates visually stunning themes. The platform supports custom domain hosting, SEO optimization, and real-time editing with live preview.",
    features: [
      "AI-generated content from resume or LinkedIn profile",
      "20+ professionally designed theme templates",
      "Real-time visual editor with drag-and-drop",
      "Automatic SEO optimization and meta tag generation",
      "Custom domain support with SSL certificates",
      "Analytics dashboard with visitor insights",
      "Responsive design across all devices",
      "One-click deployment to Vercel, Netlify, or custom hosting",
    ],
    tech: ["Next.js", "TypeScript", "OpenAI API", "Vercel", "Prisma", "PostgreSQL", "Stripe", "Cloudflare"],
    challenges: [
      "Generating high-quality, personalized content that doesn't feel generic",
      "Creating a flexible theming system that supports diverse aesthetics",
      "Building an intuitive drag-and-drop editor with real-time preview",
      "Optimizing build times for thousands of concurrent deployments",
    ],
    github: "https://github.com/",
    live: "https://example.com/",
  },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectData[id];

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-detail-container" style={{ textAlign: "center", paddingTop: "4rem" }}>
          <h1 className="project-detail-title">Project Not Found</h1>
          <p style={{ color: "rgba(245,245,245,0.6)", marginBottom: "2rem" }}>
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/#projects" className="btn-spidey btn-primary">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        <Link href="/#projects" className="project-detail-back">
          ← Back to Projects
        </Link>

        {/* Project Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "5rem",
            height: "250px",
            background: "linear-gradient(135deg, rgba(226,54,54,0.12), rgba(10,10,10,0.95))",
            borderRadius: "12px",
            border: "1px solid rgba(226,54,54,0.2)",
            marginBottom: "2rem",
          }}
        >
          {project.image}
        </div>

        <h1 className="project-detail-title">{project.title}</h1>

        <div className="project-detail-meta">
          <span>
            <strong>Category:</strong> {project.category}
          </span>
          <span>
            <strong>Year:</strong> {project.year}
          </span>
        </div>

        <p className="project-detail-desc">{project.longDescription}</p>

        {/* Tech Stack */}
        <div className="project-detail-section">
          <h3>🛠️ Tech Stack</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {project.tech.map((t) => (
              <span className="skill-tag" key={t} style={{ fontSize: "0.85rem" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="project-detail-section">
          <h3>✨ Key Features</h3>
          <ul className="project-detail-features">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="project-detail-section">
          <h3>🧩 Technical Challenges</h3>
          <ul className="project-detail-features">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="project-detail-section">
          <h3>🔗 Links</h3>
          <div className="project-detail-links">
            {project.github && (
              <a href={project.github} target="_blank" className="btn-spidey btn-primary">
                GitHub Repository
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" className="btn-spidey btn-outline">
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <Link href="/#projects" className="btn-spidey btn-outline">
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({ id }));
}
