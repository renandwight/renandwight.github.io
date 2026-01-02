export const personalInfo = {
  name: "Chris Sorley",
  location: "Texas, United States",
  email: "chris.sorley@outlook.com",
  github: "https://github.com/renandwight",
  linkedin: "https://linkedin.com/in/christophersorley",
  profilePicture: "/profile.jpeg",
  heroDescription:
    "Early-career Software Engineering candidate with a strong foundation in Python, data analytics, and technical systems optimization, backed by 20 years of military experience solving complex operational problems in high-reliability environments. Experienced in building data-driven automation solutions, analyzing large datasets, and improving system performance. Proven collaborator with strong problem-solving, communication, and continuous improvement mindset. Actively transitioning into full-time software engineering with hands-on technical training and applied analytics development.",
};

export const workExperience = [
  {
    company: "United States Department of the Air Force",
    location: "Abilene, Texas",
    position: "Maintenance Information Manager",
    period: "June 2022 - Present",
    achievements: [
      "Managed system-of-record operational data for 23 aircraft ($7.2B), delivering real-time, data-driven reporting to executive stakeholders.",
      "Designed and maintained operational reporting workflows, coordinating cross-functional data pipelines across 18 internal and external organizations.",
      "Performed data analysis and data validation on 24,700+ operational records, identifying and correcting 584 defects to ensure high data quality and accuracy.",
      "Developed analytics dashboards and recurring reports, translating raw data into actionable metrics used for planning, prioritization, and risk management.",
    ],
  },
  {
    company: "United States Department of the Air Force",
    location: "Abilene, Texas",
    position: "Avionics Manager",
    period: "May 2021 - June 2022",
    achievements: [
      "Led data integrity and data quality programs, reviewing 2,900-4,300+ records annually and consistently achieving 0% final discrepancy rates.",
      "Conducted cross-system data audits and reconciliation, improving data accuracy by up to 84% year over year.",
      "Automated data reconciliation workflows, eliminating manual steps and saving 130+ labor hours annually.",
      "Mentored 25 team members on system usage, data standards, and process compliance.",
    ],
  },
  {
    company: "United States Department of the Air Force",
    location: "Abilene, Texas",
    position: "Flightline Expediter",
    period: "August 2020 - May 2021",
    achievements: [
      "Managed high-availability operational systems in time-critical environments, prioritizing resources to maintain service continuity under load.",
      "Supported scalable operational platforms executing 14,500+ actions, enabling 868 missions and 3,300 flight hours without data-related failures.",
      "Acted as a technical liaison between engineering, operations, and leadership teams, translating system state into business-impact decisions.",
    ],
  },
    {
    company: "United States Department of the Air Force",
    location: "Suffolk, United Kingdom; Abilene, Texas, United States",
    position: "Lead Avionics Technician",
    period: "July 2015 - August 2020",
    achievements: [
      "Migrated a large-scale data integrity program to a cloud-based platform, training 43 users and validating 2,800+ records with zero residual defects.",
      "Reviewed and corrected 4,800+ task records, resolving 482 data defects and eliminating a 12-month reporting backlog.",
      "Designed and deployed training simulations and internal tooling, reducing onboarding time and production delays by 66%.",
      "Partnered with engineering, quality assurance, and incident response teams to troubleshoot system failures and restore service reliability.",
    ],
  },
      {
    company: "United States Department of the Air Force",
    location: "Okinawa, Japan; Suffolk, United Kingdom",
    position: "Avionics Technician",
    period: "August 2012 - July 2015",
    achievements: [
      "Supported mission-critical systems by validating configurations, data inputs, and execution accuracy in high-reliability environments.",
      "Performed root-cause analysis using historical data and technical documentation to resolve system anomalies.",
    ],
  },
];

export const education = [
  {
    institution: "Code Platoon",
    location: "Chicago, Illinoise (Remote)",
    degree: "15-Week Full Stack Software Engineering Bootcamp",
    period: "Expected",
  },
  {
    institution: "Air Force Institute of Technology",
    location: "Abilene, Texas (Remote)",
    degree: "Graduate Certificate in Data Analytics",
    period: "2024",
  },
  {
    institution: "Digital University",
    location: "Abilene, Texas (Remote)",
    degree: "Phantom AI Accelerator Pathway Program",
    period: "2023",
  },
  {
    institution: "Embry-Riddle Aeronautical University",
    location: "Abilene, Texas (Remote)",
    degree: "B.S. Technical Management (Management Information Systems)",
    period: "2022",
  },
];

export const skills = {
  programmingLanguages: [
    "Python",
    "Javascript",
    "Linux/WSL"
  ],
  frontendDevelopment: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Bootstrap",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Django", "Django REST Framework", "Flask"],
  databaseAndStorage: ["PostgreSQL", "SQLite"],
  cloudAndDevOps: ["Foundational: AWS, Docker, Nginx, Gunicorn"],
  toolsAndServices: [
    "Git",
    "GitHub",
    "Axios",
    "React Router",
    "DRF Token Auth",
    "REST APIs",
  ],
};

export const projects = [
  {
    title: "Aurora Project (Code Platoon Capstone)",
    github: "https://github.com/renandwight/code-platoon-personal-project",
    description: [
      "Aurora is a full-stack stock analysis and watchlist application designed to help long-term investors evaluate individual stocks using historical market data, backtesting, and performance metrics.",
      "Aurora uses Django, Django REST Framework, React, PostgreSQL, Massive API, MarketAux API, Backtesting.py, and Recharts to deliver rich financial analytics and clean, intuitive visualizations.",
      "The application focuses on clarity, usability, and data-driven insights, allowing users to move beyond intuition and make informed investment decisions.",
    ],
  },
    {
    title: "Predicting Aircraft Mission Capability (Air Force Institute of Technology Capstone)",
    description: [
      "Utilized pandas, numpy, matplotlib, scikit-learn, keras, and Jupyter Notebooks.",
      "Built regression and neural network models using operational data.",
      "Applied feature engineering, normalization, and cross-validation.",
    ],
  },
];

export const certifications = [
  {
    name: "Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "In-Progress",
  },
  {
    name: "Project Management Professional (PMP)",
    issuer: "Project Management Institute",
    date: "2025",
  },
];
