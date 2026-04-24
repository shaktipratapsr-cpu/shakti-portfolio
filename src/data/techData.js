const baseTemplate = (name, tagline) => ({
  name,
  tagline,
  knowledge: {
    concepts: ['Component-driven architecture', 'Performance-focused rendering', 'Production debugging workflows'],
    practical: ['Build reusable modules', 'Use clean state patterns', 'Handle edge cases and UX polish'],
    apis: ['Integration with modern tooling', 'Composable architecture patterns', 'Deployment-ready conventions'],
  },
  experience: [
    'Applied in production portfolio and real-world internship projects.',
    'Used to build maintainable UI systems with fast iteration cycles.',
  ],
  projects: [
    { name: 'AI-Powered PPT Generator', href: 'https://github.com/shaktipratapsr-cpu' },
    { name: 'Online Food Delivery System', href: 'https://github.com/shaktipratapsr-cpu' },
  ],
})

export const techData = {
  react: {
    name: 'React.js',
    tagline: 'Composable UI architecture for premium product interfaces.',
    knowledge: {
      concepts: ['Component composition', 'State-driven rendering', 'Hooks and lifecycle modeling'],
      practical: ['Reusable section systems', 'Lazy loading for route/section performance', 'Animation orchestration with GSAP'],
      apis: ['React Router routing model', 'Context patterns', 'Memoization where needed'],
    },
    experience: [
      'Built multiple production interfaces in React during internship work, including modular dashboards and conversion-focused landing pages.',
      'Refactored monolithic UI into reusable components and custom hooks to improve maintainability and shipping speed.',
      'Combined React with Three.js and GSAP to ship rich interactive experiences without compromising performance.',
    ],
    projects: [
      { name: 'AI-Powered PPT Generator', href: 'https://github.com/shaktipratapsr-cpu' },
      { name: 'QuickGPT - AI Assistant', href: 'https://github.com/shaktipratapsr-cpu' },
      { name: 'Online Food Delivery System', href: 'https://github.com/shaktipratapsr-cpu' },
    ],
  },
  node: baseTemplate('Node.js', 'Backend runtime for scalable API and service workflows.'),
  express: baseTemplate('Express.js', 'Minimal server framework for clean API delivery.'),
  javascript: baseTemplate('JavaScript (ES6+)', 'Core language powering interactive frontend and backend logic.'),
  'ai-api-integration': baseTemplate('AI API Integration', 'Production-grade integration of LLM and automation APIs.'),
  'mcp-architecture': baseTemplate('MCP Architecture', 'Tool-aware AI workflows with structured context exchange.'),
  mongodb: baseTemplate('MongoDB', 'Document database modeling for product-ready data flows.'),
  'rest-apis': baseTemplate('REST APIs', 'Well-structured endpoints for client-server communication.'),
  python: baseTemplate('Python', 'Scripting and AI utility development for product workflows.'),
  'git-github': baseTemplate('Git / GitHub', 'Versioning, collaboration, and release discipline.'),
  'a2ui-antigravity': baseTemplate('A2UI / Antigravity', 'AI-assisted acceleration for interface development.'),
  'html5-css3': baseTemplate('HTML5 / CSS3', 'Robust semantic layout and modern responsive styling.'),
  'mysql-basic': baseTemplate('MySQL (Basic)', 'Relational modeling for structured transactional data.'),
  'rrweb-session-recording': baseTemplate('rrweb Session Recording', 'Behavior analytics and UX diagnosis from session replay.'),
  'crud-db-design': baseTemplate('CRUD + DB Design', 'Reliable data operations with maintainable schema strategy.'),
  'agile-trello-asana': baseTemplate('Agile / Trello / Asana', 'Execution discipline through sprint and task systems.'),
}

export const getTechEntry = (slug) => techData[slug] || null
