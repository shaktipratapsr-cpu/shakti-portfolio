export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = [
  { name: 'React.js', tone: 'cyan', slug: 'react' },
  { name: 'Node.js', tone: 'cyan', slug: 'node' },
  { name: 'Express.js', tone: 'cyan', slug: 'express' },
  { name: 'JavaScript (ES6+)', tone: 'cyan', slug: 'javascript' },
  { name: 'AI API Integration', tone: 'orange', slug: 'ai-api-integration' },
  { name: 'MCP Architecture', tone: 'orange', slug: 'mcp-architecture' },
  { name: 'MongoDB', tone: 'cyan', slug: 'mongodb' },
  { name: 'REST APIs', tone: 'cyan', slug: 'rest-apis' },
  { name: 'Python', tone: 'white', slug: 'python' },
  { name: 'Git / GitHub', tone: 'white', slug: 'git-github' },
  { name: 'A2UI / Antigravity', tone: 'orange', slug: 'a2ui-antigravity' },
  { name: 'HTML5 / CSS3', tone: 'white', slug: 'html5-css3' },
  { name: 'MySQL (Basic)', tone: 'white', slug: 'mysql-basic' },
  { name: 'rrweb Session Recording', tone: 'white', slug: 'rrweb-session-recording' },
  { name: 'CRUD + DB Design', tone: 'orange', slug: 'crud-db-design' },
  { name: 'Agile / Trello / Asana', tone: 'white', slug: 'agile-trello-asana' },
]

export const STATS = [
  { value: 3, suffix: '+', label: 'Production Apps Shipped' },
  { value: 6, suffix: '+', label: 'Months at NIIT Limited' },
  { value: 30, suffix: '%', label: 'Perf. Improvement Delivered' },
  { value: 5, suffix: '+', label: 'APIs Integrated' },
]

export const PROJECTS = [
  {
    number: '01',
    name: 'AI-Powered PPT Generator',
    description:
      'A full-stack MCP-based presentation generator that converts natural language prompts into complete, export-ready PPTX files with real-time slide preview, AI-assisted editing, and custom template support.',
    tags: ['React.js', 'Node.js', 'MCP Architecture', 'AI API', 'pptxgenjs'],
    highlights: [
      'Generate 1-30 slides from a single prompt with AI-distributed content per slide',
      '6+ built-in templates plus custom PPTX/JSON template upload support',
      'Real-time slide preview panel with pixel-accurate rendering before export',
      'Manual plus AI-assisted slide editing to refine any slide on demand',
      'One-click PPTX export via pptxgenjs, fully Office-compatible',
      'Around 80% reduction in manual presentation creation time',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/shaktipratapsr-cpu' }],
    featured: true,
  },
  {
    number: '02',
    name: 'Online Food Delivery System',
    description:
      'End-to-end food delivery platform with 200+ restaurant listings, real-time order tracking across 4 stages, and advanced search filtering. Achieved 95+ Lighthouse score.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    links: [{ label: 'GitHub', href: 'https://github.com/shaktipratapsr-cpu' }],
  },
  {
    number: '03',
    name: 'QuickGPT - AI Assistant',
    description:
      'AI-powered chat interface with sub-2s response time, real-time streamed output, and 10+ modular React components. Built with scalable Express.js backend and external AI API integration.',
    tags: ['React.js', 'Node.js', 'AI API', 'A2UI'],
    links: [{ label: 'GitHub', href: 'https://github.com/shaktipratapsr-cpu' }],
  },
]

export const EXPERIENCE = [
  {
    period: 'Jan 2025 - Present',
    title: 'Full Stack Developer Intern',
    company: 'NIIT Limited',
    location: 'Gurugram, Haryana',
    bullets: [
      'Engineered 3+ full-stack web applications in React.js + Node.js, reducing average page load time by around 30% through component optimization and lazy loading.',
      'Integrated 5+ third-party REST APIs (AI, payment, maps) into production apps, cutting manual data handling by 40%.',
      'Implemented AI-assisted development workflows using A2UI and Google Antigravity, accelerating UI prototyping by around 50%.',
      'Collaborated in 2-week Agile sprint cycles via Trello and Asana, consistently shipping assigned modules on time with zero critical production bugs.',
      'Used rrweb session recording to analyze real user behavior, driving UI improvements that increased task completion rate by 20%.',
    ],
  },
  {
    period: '2022 - 2026',
    title: 'B.Tech - Computer Science',
    company: 'DCRUST Murthal',
    location: 'Deenbandhu Chhotu Ram University of Science and Technology',
    bullets: [
      '8th Semester - Expected Graduation June 2026.',
      'Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Web Technologies.',
    ],
  },
]

export const CONTACT_LINKS = [
  { icon: '✉', href: 'mailto:shaktipratapsr@gmail.com', label: 'shaktipratapsr@gmail.com' },
  {
    icon: 'in',
    href: 'https://www.linkedin.com/in/shakti-pratap-singh-05b330256',
    label: 'linkedin.com/in/shakti-pratap-singh',
    external: true,
  },
  { icon: '⌥', href: 'https://github.com/shaktipratapsr-cpu', label: 'github.com/shaktipratapsr-cpu', external: true },
  { icon: '✆', href: 'tel:+919560998337', label: '+91 95609 98337' },
]
