'use client';

import { useState, useEffect } from 'react';
import MatrixRain from './components/MatrixRain';
import TypingEffect from './components/TypingEffect';
import ProjectsShowcase from './components/ProjectsShowcase';
import SkillsHUD from './components/SkillsHUD';
import ContactTerminal from './components/ContactTerminal';
import Navbar from './components/Navbar';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [bootSequence, setBootSequence] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const totalSections = 5;

  const handleNavigation = (index: number) => {
    setIsTransitioning(true);
    setCurrentSection(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  useEffect(() => {
    const sequence = [
      { delay: 500, step: 1 },
      { delay: 1500, step: 2 },
      { delay: 2500, step: 3 },
      { delay: 3500, step: 4 },
    ];

    sequence.forEach(({ delay, step }) => {
      setTimeout(() => setBootSequence(step), delay);
    });

    setTimeout(() => setShowContent(true), 4000);
  }, []);

  // Handle scroll/wheel events for section navigation
  useEffect(() => {
    if (!showContent) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isTransitioning) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < totalSections) {
        setIsTransitioning(true);
        setCurrentSection(nextSection);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      if (e.key === 'ArrowDown' && currentSection < totalSections - 1) {
        setIsTransitioning(true);
        setCurrentSection(prev => prev + 1);
        setTimeout(() => setIsTransitioning(false), 800);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        setIsTransitioning(true);
        setCurrentSection(prev => prev - 1);
        setTimeout(() => setIsTransitioning(false), 800);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showContent, currentSection, isTransitioning]);

  return (
    <div className="h-screen overflow-hidden relative bg-black text-green-400" style={{ cursor: 'none' }}>
      {/* Navbar */}
      {showContent && <Navbar currentSection={currentSection} onNavigate={handleNavigation} />}

      {/* Holographic Overlay Effects */}
      {showContent && (
        <>
          {/* Top-left holographic panel */}
          <div className="fixed top-20 left-10 w-64 h-40 holographic iridescent rounded-lg opacity-30 pointer-events-none z-[90] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-lg" />
          </div>
          
          {/* Top-right holographic panel */}
          <div className="fixed top-40 right-10 w-48 h-48 holographic iridescent rounded-full opacity-20 pointer-events-none z-[90] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-cyan-500/10 rounded-full" />
          </div>
          
          {/* Bottom-left floating element */}
          <div className="fixed bottom-32 left-20 w-56 h-32 holographic rounded-lg opacity-25 pointer-events-none z-[90] hidden lg:block animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/10 to-green-500/10 rounded-lg" />
          </div>
          
          {/* Floating holographic orbs */}
          <div className="fixed top-1/3 right-1/4 w-24 h-24 holographic rounded-full opacity-15 pointer-events-none z-[90] hidden xl:block animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-xl" />
          </div>
          
          <div className="fixed bottom-1/4 left-1/3 w-32 h-32 holographic rounded-full opacity-15 pointer-events-none z-[90] hidden xl:block animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-xl" />
          </div>
        </>
      )}

      {/* Crosshair Cursor */}
      {showContent && (
        <>
          {/* Vertical line */}
          <div 
            className="fixed top-0 w-px h-screen bg-gradient-to-b from-transparent via-cyan-400 to-transparent pointer-events-none z-[100] opacity-50"
            style={{ left: `${mousePos.x}px` }}
          />
          {/* Horizontal line */}
          <div 
            className="fixed left-0 h-px w-screen bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none z-[100] opacity-50"
            style={{ top: `${mousePos.y}px` }}
          />
          {/* Center dot */}
          <div 
            className="fixed w-2 h-2 border-2 border-cyan-400 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
          >
            <div className="absolute inset-0 bg-cyan-400/30 rounded-full animate-pulse" />
          </div>
        </>
      )}

      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Scanline Effect */}
      <div className="scanline" />

      {/* Boot Sequence / Loading Screen */}
      {!showContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="text-center font-['Space_Mono']">
            {bootSequence >= 1 && (
              <div className="text-green-400 mb-2">
                &gt; Initializing neural network...
              </div>
            )}
            {bootSequence >= 2 && (
              <div className="text-cyan-400 mb-2">
                &gt; Loading consciousness matrix...
              </div>
            )}
            {bootSequence >= 3 && (
              <div className="text-green-400 mb-2">
                &gt; Establishing connection...
              </div>
            )}
            {bootSequence >= 4 && (
              <div className="text-cyan-400 mb-4">
                &gt; Access granted. Welcome to the mainframe.
              </div>
            )}
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <div className="fixed inset-0 w-full h-full">
          <div 
            className="w-full h-full will-change-transform"
            style={{ 
              transform: `translateY(-${currentSection * 100}vh)`,
              transition: 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)'
            }}
          >
          {/* Hero Section */}
          <section 
            className="h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-20 relative z-10"
          >
            <div className="max-w-4xl w-full">
              {/* Circuit Lines Decoration - Desktop Only */}
              <div className="hidden md:block absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-30" />
              <div className="hidden md:block absolute bottom-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30" />
              <div className="hidden md:block absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />
              <div className="hidden md:block absolute top-1/2 right-0 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />

              <div className="text-xs text-gray-500 mb-6 font-['Space_Mono']">
                <TypingEffect text="> Accessing Ishwer Dutt System..." speed={30} />
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 font-['Orbitron'] leading-tight">
                <TypingEffect 
                  text="ISHWER DUTT" 
                  speed={100}
                  className="inline-block animate-[neonFlicker_8s_ease-in-out_infinite,glowIntensify_4s_ease-in-out_infinite]"
                />
              </h1>

              <div className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-10 font-['Space_Mono'] leading-relaxed overflow-hidden">
                <TypingEffect 
                  text="> Machine Learning Engineer | Data Scientist | Electrical Engineer"
                  speed={40}
                  className="inline-block animate-[trackingInExpand_1.5s_cubic-bezier(0.215,0.610,0.355,1.000)_both,colorShift_6s_ease-in-out_infinite]"
                />
              </div>

              <div className="border-l-2 border-green-500 pl-4 sm:pl-6 py-3 sm:py-4 mb-6 sm:mb-10 animate-[textFocusIn_1s_cubic-bezier(0.550,0.085,0.680,0.530)_both]" style={{ animationDelay: '0.5s' }}>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base font-['Space_Mono'] leading-loose">
                  Electrical Engineering graduate with 4+ years experience in machine learning, deep neural networks, and power systems.
                  Built 5+ technical solutions with 99.8% accuracy in healthcare AI, NLP, and renewable energy.
                  GATE 2025 All India Rank 949 (Top 1.7%).
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 animate-[float_3s_ease-in-out_infinite]">
                <a 
                  href="#projects"
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-['Orbitron'] text-sm sm:text-base neon-border cursor-pointer hover:scale-110 transform"
                >
                  &gt; VIEW_PROJECTS
                </a>
                <a 
                  href="#contact"
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-['Orbitron'] text-sm sm:text-base cursor-pointer hover:scale-110 transform"
                >
                  &gt; CONNECT
                </a>
              </div>

              {/* ASCII Art Decoration - Desktop Only */}
              <div className="hidden md:block mt-8 sm:mt-12 text-xs text-green-500/30 font-['Space_Mono']">
                <pre>
{`    ╔═══════════════════════════════════╗
    ║  SYSTEM STATUS: ONLINE           ║
    ║  NEURAL LINK: ESTABLISHED        ║
    ║  SECURITY: MAXIMUM               ║
    ╚═══════════════════════════════════╝`}
                </pre>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section 
            className="h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 pt-24 relative z-10 border-t border-green-500/20" 
            id="about"
          >
            {/* Mathematical formulas background - Desktop Only */}
            <div className="hidden lg:block absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
              <div className="absolute top-10 left-10 text-green-500 text-lg font-mono rotate-12">
                ∇θL = 1/N ∑(ŷ - y)²
              </div>
              <div className="absolute top-20 right-20 text-cyan-400 text-xl font-mono -rotate-6">
                σ(x) = 1/(1+e^(-x))
              </div>
              <div className="absolute bottom-20 left-1/4 text-purple-500 text-lg font-mono rotate-6">
                P(A|B) = P(B|A)P(A)/P(B)
              </div>
              <div className="absolute top-1/3 right-10 text-green-400 text-base font-mono -rotate-12">
                J(θ) = -1/m ∑[y log(hθ(x)) + (1-y)log(1-hθ(x))]
              </div>
              <div className="absolute bottom-1/4 right-1/3 text-cyan-500 text-xl font-mono rotate-3">
                α_t = softmax(score(h_t, h_s))
              </div>
              <div className="absolute top-40 left-1/3 text-purple-400 text-lg font-mono -rotate-3">
                ReLU(x) = max(0, x)
              </div>
            </div>

            <div className="max-w-4xl mx-auto w-full relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 font-['Orbitron']">
                <span className="chrome-text">&gt; SYSTEM_INFO_</span>
              </h2>
              
              <div className="border border-green-500/30 p-4 sm:p-6 md:p-8 bg-black/60 holographic holo-border iridescent">
                <div className="font-['Space_Mono'] space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  <div className="flex flex-col sm:flex-row">
                    <span className="text-cyan-400 sm:w-32 mb-1 sm:mb-0">&gt; Name:</span>
                    <span className="text-green-400">Ishwer Dutt</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="text-cyan-400 sm:w-32 mb-1 sm:mb-0">&gt; Role:</span>
                    <span className="text-green-400">ML Engineer / Data Scientist</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="text-cyan-400 sm:w-32 mb-1 sm:mb-0">&gt; Location:</span>
                    <span className="text-green-400">Hamirpur, HP, India</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="text-cyan-400 sm:w-32 mb-1 sm:mb-0">&gt; Education:</span>
                    <span className="text-green-400">B.Tech NIT Hamirpur</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="text-cyan-400 sm:w-32 mb-1 sm:mb-0">&gt; Status:</span>
                    <span className="text-green-400 pulse">● AVAILABLE FOR OPPORTUNITIES</span>
                  </div>
                  <div className="border-t border-green-500/30 mt-4 sm:mt-6 pt-4 sm:pt-6">
                    <span className="text-cyan-400">&gt; Bio:</span>
                    <p className="text-gray-300 mt-3 leading-loose">
                      Electrical Engineering graduate from NIT Hamirpur with 4+ years of hands-on experience in machine learning, 
                      deep neural networks, and power systems. Processed 500K+ data points, improved algorithm performance by 40%, 
                      and led technical teams of 15+ students. Achieved 99.8% accuracy in healthcare AI solutions. 
                      Experienced in TensorFlow, PyTorch, Python, and cloud deployment. GATE 2025 DA: AIR 949 (Top 1.7%).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <div id="projects">
            <ProjectsShowcase />
          </div>

          {/* Skills Section */}
          <SkillsHUD />

          {/* Contact Section */}
          <div id="contact">
            <ContactTerminal />
          </div>
          </div>
        </div>
      )}

      {/* Section Indicators */}
      {showContent && (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 space-y-3">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentSection(index);
                setTimeout(() => setIsTransitioning(false), 800);
              }}
              className={`block w-3 h-3 rounded-full border transition-all duration-300 ${
                currentSection === index 
                  ? 'bg-cyan-400 border-cyan-400 w-4 h-4' 
                  : 'border-green-500 hover:border-cyan-400'
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
