export const NAV_LINKS = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Hire', href: '#whyHireMe' },
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
      'Transform ideas into stunning slide decks instantly. AI-powered presentation generator that converts prompts into export-ready PPTX files with real-time preview and custom template support.',
    problem: 'Manual presentation creation takes 80% longer than necessary',
    solution: 'MCP-based AI engine converts prompts → structured slides in seconds',
    impact: '80% reduction in presentation creation time',
    tags: ['React.js', 'Node.js', 'MCP Architecture', 'AI API', 'pptxgenjs'],
    highlights: [
      'Generate 1-30 slides from single prompt',
      '6+ templates + custom upload support',
      'Real-time slide preview before export',
      'AI-assisted + manual editing',
      'One-click PPTX export',
    ],
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/shaktipratapsr-cpu' },
      { label: 'Live Demo', href: '#', disabled: true },
    ],
    featured: true,
  },
  {
    number: '02',
    name: 'Online Food Delivery System',
    description:
      'Full-stack food delivery platform connecting users with 200+ restaurants. Real-time order tracking, advanced filtering, and 95+ Lighthouse performance score.',
    problem: 'Fragmented food ordering experience with slow load times',
    solution: 'Unified platform with optimized performance and real-time tracking',
    impact: '95+ Lighthouse score, sub-2s page load time',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    highlights: [
      '200+ restaurant integrations',
      'Real-time order tracking (4 stages)',
      'Advanced search & filtering',
      '95+ Lighthouse performance',
      'Mobile-optimized checkout',
    ],
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1495465542159-7a92e29e58f6?w=500&h=300&fit=crop',
    ],
    links: [
      { label: 'Live Demo', href: 'https://food-del-frontend11-git-main-shakti-s-projects-f142e32b.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/shaktipratapsr-cpu' },
    ],
  },
  {
    number: '03',
    name: 'QuickGPT - AI Assistant',
    description:
      'Sub-2s AI chat interface with streaming output. 10+ modular components built on scalable Node.js backend with external LLM integration.',
    problem: 'Slow AI assistants with rigid UI limit productivity',
    solution: 'Streaming-based AI with modular, fast React architecture',
    impact: 'Sub-2s response time, 99.2% uptime',
    tags: ['React.js', 'Node.js', 'AI API', 'A2UI'],
    highlights: [
      'Sub-2s response time',
      '10+ reusable components',
      'Real-time streaming output',
      'Image generation integration',
      'Chat history management',
    ],
    images: [
      'https://images.unsplash.com/photo-1677442d019cecf8e5004a9560c1548db821b41e45fe0a4cffa1a1a34a40e16b?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    ],
    links: [
      { label: 'Live Demo', href: 'https://quickgpt-with-public-dashborad.onrender.com/' },
      { label: 'GitHub', href: 'https://github.com/shaktipratapsr-cpu' },
    ],
  },
]

export const EXPERIENCE = [
  {
    period: 'Jan 2025 - Present',
    title: 'Full Stack Developer Intern',
    company: 'NIIT Limited',
    location: 'Gurugram, Haryana',
    bullets: [
      '↓ 30% page load time via React optimization + lazy loading; shipped 3+ production apps',
      '↑ 5+ API integrations (AI, payment, maps); 40% reduction in manual data handling',
      '↑ 50% UI prototyping speed using A2UI + Antigravity; zero critical production bugs',
    ],
  },
  {
    period: '2022 - 2026',
    title: 'B.Tech - Computer Science',
    company: 'DCRUST Murthal',
    location: 'Deenbandhu Chhotu Ram University',
    bullets: [
      '8th Semester (Graduation: June 2026)',
      'DSA, Algorithms, DBMS, OS, Web Technologies',
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
