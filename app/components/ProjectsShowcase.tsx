'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Medical AI: Breast Cancer Classification',
    description: 'ResNet101-based CNN for medical image analysis using 15K+ ultrasound images. Achieved 99.64% training accuracy and 99.12% validation accuracy with F1-score of 0.994.',
    tech: ['PyTorch', 'ResNet101', 'Computer Vision', 'Healthcare AI'],
    status: 'ACTIVE'
  },
  {
    id: 2,
    title: 'LSTM Language Model for Predictive Text',
    description: 'Deep learning LSTM neural network processing 75K+ sentences with 250K+ vocabulary tokens. Achieved 89.7% next-word prediction accuracy supporting 150+ concurrent users.',
    tech: ['TensorFlow', 'LSTM', 'NLP', 'Deep Learning'],
    status: 'DEPLOYED'
  },
  {
    id: 3,
    title: 'PEM Fuel Cell Multi-Physics Modeling',
    description: 'Advanced thermal management simulation with ±1.5°C accuracy using heat conduction equations. Validated model achieving 97.3% correlation for I-V characteristics.',
    tech: ['MATLAB', 'Simulink', 'Mathematical Modeling'],
    status: 'RESEARCH'
  },
  {
    id: 4,
    title: 'Power Systems Predictive Maintenance',
    description: 'Analyzed critical infrastructure for 2 major substations serving 15,000+ customers. Reduced system downtime by 18% and improved power quality metrics by 12%.',
    tech: ['ETAP', 'AutoCAD', 'Data Analysis', 'MATLAB'],
    status: 'DEPLOYED'
  }
];

export default function ProjectsShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 relative z-10 border-t border-cyan-400/20 snap-start">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <svg width="100%" height="100%" className="text-cyan-400">
          {/* Neural network connections */}
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="currentColor" strokeWidth="3" />
          <line x1="10%" y1="20%" x2="30%" y2="60%" stroke="currentColor" strokeWidth="3" />
          <line x1="30%" y1="40%" x2="50%" y2="30%" stroke="currentColor" strokeWidth="3" />
          <line x1="30%" y1="60%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="3" />
          <line x1="50%" y1="30%" x2="70%" y2="40%" stroke="currentColor" strokeWidth="3" />
          <line x1="50%" y1="50%" x2="70%" y2="60%" stroke="currentColor" strokeWidth="3" />
          <line x1="70%" y1="40%" x2="90%" y2="50%" stroke="currentColor" strokeWidth="3" />
          <line x1="70%" y1="60%" x2="90%" y2="50%" stroke="currentColor" strokeWidth="3" />
          
          {/* Nodes */}
          <circle cx="10%" cy="20%" r="8" fill="#00ff41" />
          <circle cx="30%" cy="40%" r="8" fill="#00d4ff" />
          <circle cx="30%" cy="60%" r="8" fill="#00d4ff" />
          <circle cx="50%" cy="30%" r="8" fill="#c900ff" />
          <circle cx="50%" cy="50%" r="8" fill="#c900ff" />
          <circle cx="70%" cy="40%" r="8" fill="#00d4ff" />
          <circle cx="70%" cy="60%" r="8" fill="#00d4ff" />
          <circle cx="90%" cy="50%" r="8" fill="#00ff41" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 font-['Orbitron'] text-center">
          <span className="chrome-text inline-block animate-[expandContract_3s_ease-in-out_infinite,glowIntensify_2s_ease-in-out_infinite]">&gt; PROJECTS_</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                relative p-8 border transition-all duration-300 cursor-pointer holo-border
                ${hoveredId === project.id 
                  ? 'border-cyan-400 neon-border bg-black/60 iridescent' 
                  : 'border-green-500/30 bg-black/40'
                }
                holographic
              `}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project chip corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

              {/* Status indicator */}
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full pulse ${
                  project.status === 'ACTIVE' ? 'bg-green-500' :
                  project.status === 'DEPLOYED' ? 'bg-cyan-400' :
                  project.status === 'BETA' ? 'bg-yellow-400' :
                  'bg-purple-500'
                }`}></div>
                <span className="text-xs text-gray-400 font-['Space_Mono']">
                  [{project.status}]
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 font-['Orbitron'] text-green-400">
                {project.title.split(' ').map((word, i) => (
                  <span
                    key={i}
                    className="inline-block group-hover:animate-[wave_0.5s_ease-in-out]"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </h3>
              
              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs border border-green-500/50 text-green-400 font-['Space_Mono']"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {hoveredId === project.id && (
                <div className="mt-5 pt-5 border-t border-cyan-400/30">
                  <button className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                    &gt; ACCESS_PROJECT_
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
