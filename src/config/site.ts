export const siteConfig = {
  name: "Halit Ozger",
  title: "Full Stack Developer & AI/ML Engineer",
  description: "Building intelligent, scalable web applications with modern technologies and AI capabilities.",
  email: "haltozger02@gmail.com",
  phone: "+44 7389 811567",
  location: "London, UK",
  
  social: {
    github: "https://github.com/haJ1t",
    linkedin: "https://www.linkedin.com/in/halit-ozger-72094a20a/",
  },

  nav: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  hero: {
    greeting: "👋 Hi, I'm",
    name: "Halit Ozger",
    title: "Full Stack Developer & AI/ML Engineer",
    description: "Building intelligent, scalable web applications that combine elegant frontends with powerful backend systems and AI capabilities. Specialized in React/Next.JS, Django REST Framework, and Machine Learning.",
    cta: {
      primary: "View My Work",
      secondary: "Get In Touch",
    },
  },

  about: {
    title: "About Me",
    subtitle: "Full Stack Developer with AI/ML Expertise",
    description: [
      "I'm a Full Stack Developer based in London, specializing in building high-performance web applications that combine elegant frontends with powerful backend systems and intelligent AI features.",
      "With expertise spanning from SvelteKit and React on the frontend to Django REST Framework and PostgreSQL on the backend, I create seamless, scalable solutions that prioritize both user experience and system reliability.",
      "My unique advantage lies in integrating AI/ML capabilities into web applications—from NLP-powered features to intelligent recommendation systems using scikit-learn and spaCy—making applications not just functional, but truly intelligent.",
      "I'm passionate about clean code, optimal performance, and creating products that solve real-world problems with modern technology."
    ],
    image: "/images/profile.jpg",
    resume: "/resume.pdf",
    
    skills: [
      {
        category: "Frontend Development",
        items: ["SvelteKit", "TypeScript", "React", "HTML5/CSS3", "Tailwind CSS", "Responsive Design", "Accessibility (ARIA/WCAG)"]
      },
      {
        category: "Backend Development",
        items: ["Django REST Framework", "FastAPI", "Python", "PostgreSQL", "SQL", "API Design", "Docker"]
      },
      {
        category: "AI & Machine Learning",
        items: ["scikit-learn", "spaCy", "NumPy", "Pandas", "NLP", "Model Evaluation", "Feature Engineering"]
      },
      {
        category: "Tools & Workflow",
        items: ["Git/GitHub", "Pytest", "Vitest", "ESLint/Prettier", "Agile (Scrum)", "Figma"]
      }
    ],

    experience: [
      {
        title: "Full Stack Developer",
        company: "Freelance / Contract Work",
        period: "2020 - Present",
        description: "Building end-to-end web applications with modern tech stack. Specialized in SvelteKit frontends, Django REST backends, and integrating AI/ML features for intelligent user experiences.",
        logo: "/images/freelance.png"
      },
      {
        title: "AI/ML Developer",
        company: "Various Projects",
        period: "2021 - Present",
        description: "Developed intelligent systems using scikit-learn and spaCy. Built NLP-powered features, recommendation systems, and intent classifiers for real-world applications.",
        logo: "/images/ai-projects.png"
      },
      {
        title: "Backend Developer",
        company: "Web Development Projects",
        period: "2019 - Present",
        description: "Designed and implemented scalable API systems with Django REST Framework and PostgreSQL. Focused on data modeling, query optimization, and system performance.",
        logo: "/images/backend.png"
      }
    ],

    education: [
      {
        degree: "Computer Science & Software Engineering",
        school: "Self-taught & Online Courses",
        period: "2018 - Present",
        description: "Focused on full-stack development, AI/ML, and modern web technologies through continuous learning and hands-on projects."
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "AI-Powered Recommendation System",
      description: "Intelligent recommendation engine using machine learning to provide personalized suggestions based on user behavior and preferences.",
      longDescription: "Built a sophisticated recommendation system using scikit-learn and collaborative filtering algorithms. Features include real-time predictions, user preference learning, and performance optimization for scalability.",
      image: "/images/ai-recommender.jpg",
      tags: ["Python", "scikit-learn", "Django REST", "PostgreSQL", "Machine Learning"],
      github: "https://github.com/haltozger/ai-recommender",
      demo: "https://ai-recommender-demo.com",
      featured: true,
      category: "AI/ML"
    },
    {
      id: 2,
      title: "NLP Intent Classifier",
      description: "Natural Language Processing system for understanding user intent and routing queries to appropriate handlers with high accuracy.",
      longDescription: "Developed an NLP-powered intent classification system using spaCy. Trained custom models for domain-specific intent recognition with F1 scores above 90%. Integrated with REST API for real-time predictions.",
      image: "/images/nlp-classifier.jpg",
      tags: ["spaCy", "Python", "NLP", "FastAPI", "Model Evaluation"],
      github: "https://github.com/haltozger/nlp-intent",
      demo: "https://nlp-intent-demo.com",
      featured: true,
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Full Stack E-Commerce Platform",
      description: "Modern e-commerce platform with SvelteKit frontend, Django REST backend, and real-time inventory management.",
      longDescription: "Built a complete e-commerce solution with responsive SvelteKit UI, robust Django REST API, PostgreSQL database, and integrated payment processing. Features include user authentication, product management, shopping cart, and order tracking.",
      image: "/images/ecommerce.jpg",
      tags: ["SvelteKit", "Django REST", "PostgreSQL", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/haltozger/ecommerce",
      demo: "https://ecommerce-demo.com",
      featured: true,
      category: "Full Stack"
    },
    {
      id: 4,
      title: "Real-Time Analytics Dashboard",
      description: "Interactive analytics dashboard with data visualization, real-time updates, and performance metrics tracking.",
      longDescription: "Created a comprehensive analytics dashboard using SvelteKit and Django REST. Features include real-time data updates, interactive charts, custom reports, and data export functionality.",
      image: "/images/analytics.jpg",
      tags: ["SvelteKit", "Django REST", "PostgreSQL", "Charts", "WebSockets"],
      github: "https://github.com/haltozger/analytics-dashboard",
      demo: "https://analytics-demo.com",
      featured: true,
      category: "Full Stack"
    },
    {
      id: 5,
      title: "Task Management System",
      description: "Collaborative task management tool with team features, real-time updates, and progress tracking.",
      longDescription: "Developed a Trello-like task management application with drag-and-drop functionality, real-time collaboration, team management, and project tracking. Built with SvelteKit frontend and Django REST backend.",
      image: "/images/task-manager.jpg",
      tags: ["SvelteKit", "Django REST", "PostgreSQL", "WebSockets", "TypeScript"],
      github: "https://github.com/haltozger/task-manager",
      demo: "https://task-manager-demo.com",
      featured: false,
      category: "Full Stack"
    },
    {
      id: 6,
      title: "API Performance Optimizer",
      description: "Backend optimization toolkit for improving API response times, query performance, and system scalability.",
      longDescription: "Built a comprehensive toolkit for Django REST API optimization. Includes query optimization, caching strategies, database indexing, and performance monitoring tools. Achieved 70% improvement in response times.",
      image: "/images/api-optimizer.jpg",
      tags: ["Django REST", "PostgreSQL", "Python", "Performance", "Optimization"],
      github: "https://github.com/haltozger/api-optimizer",
      demo: "https://api-optimizer-demo.com",
      featured: false,
      category: "Backend"
    }
  ],

  contact: {
    title: "Let's Work Together",
    subtitle: "Have a project in mind? Let's create something amazing together.",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to collaborate on innovative solutions.",
    
    info: [
      {
        label: "Email",
        value: "haltozger02@gmail.com",
        href: "mailto:haltozger02@gmail.com",
        icon: "Mail"
      },
      {
        label: "Location",
        value: "London, UK",
        href: null,
        icon: "MapPin"
      },
      {
        label: "Phone",
        value: "+44 7389 811567",
        href: "tel:+447389811567",
        icon: "Phone"
      }
    ],

    form: {
      name: {
        label: "Name",
        placeholder: "Your Name",
        required: true
      },
      email: {
        label: "Email",
        placeholder: "your.email@example.com",
        required: true
      },
      subject: {
        label: "Subject",
        placeholder: "Project Inquiry",
        required: true
      },
      message: {
        label: "Message",
        placeholder: "Tell me about your project...",
        required: true
      },
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Something went wrong. Please try again."
    }
  },

  footer: {
    description: "Building intelligent, scalable web applications with modern technologies.",
    copyright: "© 2025 Halit Özger. All rights reserved.",
    builtWith: "Built with Next.js, TypeScript & Tailwind CSS",
    
    links: {
      quickLinks: {
        title: "Quick Links",
        items: [
          { name: "Home", href: "#hero" },
          { name: "About", href: "#about" },
          { name: "Skills", href: "#skills" },
          { name: "Projects", href: "#projects" },
          { name: "Contact", href: "#contact" }
        ]
      },
      resources: {
        title: "Resources",
        items: [
          { name: "Resume", href: "/resume.pdf" },
          { name: "GitHub", href: "https://github.com/haltozger" },
          { name: "LinkedIn", href: "https://linkedin.com/in/haltozger" }
        ]
      }
    }
  }
};

export type SiteConfig = typeof siteConfig;
