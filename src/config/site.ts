export const siteConfig = {
    name: "Halit Ozger",
    title: "Full Stack Developer & UI/UX Designer",
    description: "Building modern web applications with creative solutions and exceptional user experiences.",
    email: "john.doe@example.com",
    location: "London, UK",
    
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
      instagram: "https://instagram.com/yourusername",
    },
  
    nav: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  
    hero: {
      greeting: "👋 Hi, I'm",
      name: "Halit Ozger",
      title: "Full Stack Developer & UI/UX Designer",
      description: "I build modern web applications with focus on user experience and creative solutions. Passionate about clean code and beautiful designs.",
      cta: {
        primary: "View My Work",
        secondary: "Get In Touch",
      },
    },
  
    about: {
      title: "About Me",
      subtitle: "Get to know me better",
      description: [
        "I'm a passionate Full Stack Developer with 5+ years of experience in building web applications. I specialize in React, Next.js, and Node.js.",
        "I love creating intuitive and dynamic user experiences. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
      ],
      image: "/images/profile.jpg", // Profil fotoğrafın
      resume: "/resume.pdf", // CV dosyan
      
      skills: [
        {
          category: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"]
        },
        {
          category: "Tools",
          items: ["Git", "Docker", "Figma", "VS Code", "Postman"]
        },
        {
          category: "Soft Skills",
          items: ["Problem Solving", "Team Work", "Communication", "Time Management"]
        }
      ],
  
      experience: [
        {
          title: "Senior Full Stack Developer",
          company: "Tech Company Inc.",
          period: "2022 - Present",
          description: "Leading development of enterprise web applications using React and Node.js.",
          logo: "/images/company1.png"
        },
        {
          title: "Full Stack Developer",
          company: "Startup XYZ",
          period: "2020 - 2022",
          description: "Built and maintained multiple client projects using modern web technologies.",
          logo: "/images/company2.png"
        },
        {
          title: "Junior Developer",
          company: "Digital Agency",
          period: "2019 - 2020",
          description: "Developed responsive websites and learned best practices in web development.",
          logo: "/images/company3.png"
        }
      ],
  
      education: [
        {
          degree: "Bachelor of Computer Science",
          school: "University of Technology",
          period: "2015 - 2019",
          description: "Focused on software engineering and web development."
        }
      ]
    },
  
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
        longDescription: "Built a comprehensive e-commerce solution using Next.js, Stripe for payments, and PostgreSQL for data management. Features include user authentication, product management, shopping cart, and order tracking.",
        image: "/images/project1.jpg",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
        github: "https://github.com/yourusername/project1",
        demo: "https://project1-demo.com",
        featured: true,
        category: "Web App"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates, team collaboration features, and progress tracking.",
        longDescription: "Developed a Trello-like application with drag-and-drop functionality, real-time collaboration using WebSockets, and team management features.",
        image: "/images/project2.jpg",
        tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
        github: "https://github.com/yourusername/project2",
        demo: "https://project2-demo.com",
        featured: true,
        category: "Web App"
      },
      {
        id: 3,
        title: "Portfolio Website",
        description: "A modern portfolio website with smooth animations, dark mode support, and responsive design.",
        longDescription: "Created a stunning portfolio website using Next.js 14, Framer Motion for animations, and Tailwind CSS for styling. Features include smooth scrolling, contact form, and blog section.",
        image: "/images/project3.jpg",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
        github: "https://github.com/yourusername/project3",
        demo: "https://project3-demo.com",
        featured: false,
        category: "Website"
      },
      {
        id: 4,
        title: "Weather Dashboard",
        description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
        longDescription: "Built a weather dashboard using React and OpenWeather API. Features include 7-day forecast, hourly updates, weather maps, and severe weather alerts.",
        image: "/images/project4.jpg",
        tags: ["React", "API Integration", "Charts.js", "CSS Modules"],
        github: "https://github.com/yourusername/project4",
        demo: "https://project4-demo.com",
        featured: false,
        category: "Web App"
      },
      {
        id: 5,
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media management with data visualization and reporting features.",
        longDescription: "Developed a comprehensive analytics dashboard for tracking social media metrics across multiple platforms. Includes data visualization, custom reports, and scheduled posting.",
        image: "/images/project5.jpg",
        tags: ["Vue.js", "D3.js", "Node.js", "Express", "MySQL"],
        github: "https://github.com/yourusername/project5",
        demo: "https://project5-demo.com",
        featured: true,
        category: "Dashboard"
      },
      {
        id: 6,
        title: "Blog Platform",
        description: "A modern blogging platform with markdown support, comments, and SEO optimization.",
        longDescription: "Created a full-featured blog platform with markdown editor, comment system, user authentication, and SEO optimization. Built with Next.js and Prisma.",
        image: "/images/project6.jpg",
        tags: ["Next.js", "Prisma", "PostgreSQL", "Markdown", "SEO"],
        github: "https://github.com/yourusername/project6",
        demo: "https://project6-demo.com",
        featured: false,
        category: "Website"
      }
    ],
  
    contact: {
      title: "Let's Work Together",
      subtitle: "Have a project in mind? Let's create something amazing together.",
      description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      
      info: [
        {
          label: "Email",
          value: "john.doe@example.com",
          href: "mailto:john.doe@example.com",
          icon: "Mail"
        },
        {
          label: "Location",
          value: "San Francisco, CA",
          href: null,
          icon: "MapPin"
        },
        {
          label: "Phone",
          value: "+1 (555) 123-4567",
          href: "tel:+15551234567",
          icon: "Phone"
        }
      ],
  
      form: {
        name: {
          label: "Name",
          placeholder: "John Doe",
          required: true
        },
        email: {
          label: "Email",
          placeholder: "john@example.com",
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
      description: "Building modern web solutions with creative designs.",
      copyright: "© 2025 Halit Ozger. Made with ❤️",
      builtWith: "Built with Next.js & Tailwind CSS",
      
      links: {
        quickLinks: {
          title: "Quick Links",
          items: [
            { name: "Home", href: "#hero" },
            { name: "About", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" }
          ]
        },
        resources: {
          title: "Resources",
          items: [
            { name: "Blog", href: "/blog" },
            { name: "Resume", href: "/resume.pdf" },
            { name: "GitHub", href: "https://github.com/yourusername" }
          ]
        }
      }
    }
  };
  
  export type SiteConfig = typeof siteConfig;
  