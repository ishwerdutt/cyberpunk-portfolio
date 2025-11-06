'use client';

const skills = [
  { name: 'Python', level: 95, category: 'PROGRAMMING' },
  { name: 'TensorFlow', level: 92, category: 'ML/AI' },
  { name: 'PyTorch', level: 90, category: 'ML/AI' },
  { name: 'Keras', level: 90, category: 'ML/AI' },
  { name: 'Scikit-Learn', level: 88, category: 'ML/AI' },
  { name: 'OpenCV', level: 85, category: 'ML/AI' },
  { name: 'C++', level: 85, category: 'PROGRAMMING' },
  { name: 'MATLAB', level: 88, category: 'ENGINEERING' },
  { name: 'NumPy/Pandas', level: 93, category: 'DATA SCIENCE' },
  { name: 'AWS', level: 80, category: 'CLOUD' },
  { name: 'AutoCAD', level: 82, category: 'ENGINEERING' },
  { name: 'Simulink', level: 87, category: 'ENGINEERING' },
];

export default function SkillsHUD() {
  return (
    <section className="h-screen flex items-center justify-center py-24 px-6 relative z-10 border-t border-purple-500/20 snap-start">
      {/* LLaMA Architecture Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        {/* LLaMA Architecture Diagram */}
        <div className="absolute top-10 left-10 text-green-500 text-sm font-mono">
          <div className="border-2 border-green-500/60 p-3 mb-2 bg-black/20 font-bold">LLaMA Architecture</div>
          <div className="border border-cyan-400/50 p-2 mb-1 bg-black/10 text-xs">Input Embeddings + RoPE</div>
          <div className="border border-purple-500/50 p-2 mb-1 bg-black/10 text-xs">32× Transformer Blocks</div>
          <div className="border border-green-500/50 p-2 mb-1 bg-black/10 text-xs">├─ RMSNorm</div>
          <div className="border border-cyan-400/50 p-2 mb-1 bg-black/10 text-xs">├─ Multi-Head Attention (GQA)</div>
          <div className="border border-purple-500/50 p-2 mb-1 bg-black/10 text-xs">├─ RMSNorm</div>
          <div className="border border-green-500/50 p-2 mb-1 bg-black/10 text-xs">└─ SwiGLU FFN</div>
          <div className="border border-cyan-400/50 p-2 bg-black/10 text-xs">Output Head</div>
        </div>
        
        {/* Key LLaMA Features */}
        <div className="absolute bottom-10 right-10 text-cyan-400 text-base font-mono">
          <div className="mb-3 font-bold text-lg">LLaMA Features:</div>
          <div className="text-sm mb-2">• RoPE: Rotary Position Embedding</div>
          <div className="text-sm mb-2">• GQA: Grouped Query Attention</div>
          <div className="text-sm mb-2">• SwiGLU: Swish-Gated Linear Unit</div>
          <div className="text-sm">• RMSNorm: Root Mean Square Norm</div>
        </div>
        
        {/* Context Length */}
        <div className="absolute top-1/2 left-1/4 text-purple-500 text-base font-mono">
          <div className="border-2 border-purple-500/60 p-4 bg-black/20">
            <div className="font-bold text-lg">Context: 2048</div>
            <div className="text-sm mt-2">Params: 7B-65B</div>
          </div>
        </div>
        
        {/* Attention Formula */}
        <div className="absolute top-1/3 right-1/4 text-green-500 text-base font-mono">
          <div className="border-2 border-green-500/60 p-4 bg-black/20">
            <div className="font-bold">Attention(Q,K,V)</div>
            <div className="text-sm mt-2">= softmax(QK^T/√d)V</div>
          </div>
        </div>
        
        {/* Model Size */}
        <div className="absolute bottom-1/4 left-1/3 text-cyan-500 font-mono text-sm">
          <div>Hidden: 4096</div>
          <div>Heads: 32</div>
          <div>Layers: 32</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 font-['Orbitron'] text-center">
          <span className="chrome-text inline-block animate-[expandContract_3s_ease-in-out_infinite,glowIntensify_2s_ease-in-out_infinite]">&gt; TECH_STACK_</span>
        </h2>

        {/* HUD Grid Layout */}
        <div className="relative">
          {/* Center radar effect */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-96 h-96 border border-green-500 rounded-full"></div>
            <div className="w-72 h-72 border border-green-500 rounded-full absolute"></div>
            <div className="w-48 h-48 border border-green-500 rounded-full absolute"></div>
            <div className="w-24 h-24 border border-green-500 rounded-full absolute"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 border border-green-500/30 bg-black/70 hover:border-cyan-400 hover:bg-black/85 transition-all duration-300 holographic"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Category */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-gray-500 font-['Space_Mono']">
                    [{skill.category}]
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                
                {/* Skill Name */}
                <div className="text-green-400 font-bold font-['Orbitron'] mb-6 text-lg group-hover:animate-[glowIntensify_0.5s_ease-in-out,colorShift_2s_ease-in-out_infinite]">
                  {skill.name}
                </div>

                {/* Circular Progress */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <svg className="transform -rotate-90" width="96" height="96">
                    {/* Background circle */}
                    <circle
                      cx="48" cy="48" r="42"
                      stroke="#1f2937" strokeWidth="6" fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="48" cy="48" r="42"
                      stroke="url(#skillGradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 42}`}
                      strokeDashoffset={`${2 * Math.PI * 42 * (1 - skill.level / 100)}`}
                      className="transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ff41" />
                        <stop offset="50%" stopColor="#00d4ff" />
                        <stop offset="100%" stopColor="#c900ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-cyan-400 text-2xl font-bold font-['Orbitron']">{skill.level}</span>
                    <span className="text-green-500 text-xs font-['Space_Mono']">LEVEL</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 font-['Space_Mono']">PROFICIENCY</span>
                    <span className="text-xs text-cyan-400 font-['Space_Mono'] font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-400 to-purple-500 transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-['Space_Mono']">
                  <div className="bg-black/50 p-2 border border-green-500/20 rounded">
                    <div className="text-green-400 font-bold">{Math.floor(skill.level * 0.95)}</div>
                    <div className="text-gray-500 text-[10px]">ACC</div>
                  </div>
                  <div className="bg-black/50 p-2 border border-cyan-400/20 rounded">
                    <div className="text-cyan-400 font-bold">{Math.floor(skill.level * 0.98)}</div>
                    <div className="text-gray-500 text-[10px]">SPD</div>
                  </div>
                  <div className="bg-black/50 p-2 border border-purple-400/20 rounded">
                    <div className="text-purple-400 font-bold">{Math.floor(skill.level / 25)}Y</div>
                    <div className="text-gray-500 text-[10px]">EXP</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
